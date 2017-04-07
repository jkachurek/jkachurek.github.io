import * as DataQueries from '../util/DataQueries';
import {ResourceUsage} from './ResourceUsage';
import {PlayerData} from '../constants/PlayerData';
import {GameSettings} from '../constants/GameSettings';
import {Unit} from './Items';
import {Numbers} from '../util/Extensions';

/**
 * Basic structure of anything used to pay for an item.
 * 
 * @export
 * @interface ICost
 */
export interface ICost extends ResourceUsage {
	/**
	 * Spends the cost of the item.
	 * @memberOf ICost
	 */
	spend(): void;
	/**
	 * Checks if this cost is affordable
	 * @returns {boolean} Is this cost affordable?
	 * @memberOf ICost
	 */
	isAffordable(): boolean;
	/**
	 * Increases this cost by a factor
	 * @memberOf ICost
	 */
	increaseByFactor(): void;
	/**
	 * Decreases this cost by a factor
	 * @memberOf ICost
	 */
	decreaseByFactor(): void;
}
/**
 * Regular cost that uses resources
 * 
 * @export
 * @class Cost
 * @extends {ResourceUsage}
 * @implements {ICost}
 */
export class Cost extends ResourceUsage implements ICost {
	spend(): void {
		PlayerData.resources[this.type] -= this.amount;
		PlayerData.resources[this.type] = Numbers.RoundToPrecision(PlayerData.resources[this.type], 2);
	}
	isAffordable(): boolean {
		return PlayerData.resources[this.type] >= this.amount;
	}
	increaseByFactor(): void { // TODO: Use influence factor to decrease costs and/or increase rates
		this.amount *= GameSettings.costIncreaseFactor;
		this.amount = Math.round(this.amount * 100) / 100;
	}
	decreaseByFactor(): void {
		this.amount /= GameSettings.costIncreaseFactor;
		this.amount = Math.round(this.amount * 100) / 100;
	}
}
/**
 * Cost that uses other units as currency
 * 
 * @export
 * @class UnitCost
 * @extends {ResourceUsage}
 * @implements {ICost}
 */
export class UnitCost extends ResourceUsage implements ICost {
	spend(): void {
		PlayerData.inventory[this.type] -= this.amount;
		let thisUnit = DataQueries.GetItemByName<Unit>(this.type);
		// next two lines prevent it from checking unlock info every time you
		// remove the item from the inventory
		thisUnit.amountOwned -= (this.amount - 1);
		thisUnit.removeFromInventory();

		// thisUnit.benefits.forEach(ben => ben.remove());
		thisUnit.cost.forEach(c => c.decreaseByFactor());
	}

	isAffordable(): boolean {
		return DataQueries.GetItemByName<Unit>(this.type).amountOwned >= this.amount;
	}
	increaseByFactor(): void { // STUB
	}
	decreaseByFactor(): void { // STUB
	};
}
