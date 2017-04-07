import {ResourceUsage} from './ResourceUsage';
import {PlayerData} from '../constants/PlayerData';
import {GetItemByName} from '../util/DataQueries';
import {Numbers, RNG} from '../util/Extensions';
import {GameItem} from './Items';
import {GameSettings} from '../constants/GameSettings';

/**
 * Defines a benefit that can be added or removed for the player
 * 
 * @export
 * @interface IBenefit
 * @extends {ResourceUsage}
 */
export interface IBenefit extends ResourceUsage {
	/**
	 * Add benefit to player
	 * 
	 * @memberOf IBenefit
	 */
	add(): void;
	/**
	 * Removes the benefit from the player
	 * @memberOf IBenefit
	 */
	remove(): void;
}
/**
 * Defines benefits that activate every tick
 * 
 * @export
 * @interface Tickable
 */
export interface Tickable {
	/**
	 * Runs every game tick to apply the benefit.
	 * 
	 * @param {number} [multiplier] The multiplier for the benefit applied.
	 * 
	 * @memberOf Tickable
	 */
	tick(multiplier?: number): void;
}
/**
 * Represents a one-time increase in a resource.
 * 
 * @export
 * @class ResourceConstant
 * @extends {ResourceUsage}
 * @implements {IBenefit}
 */
export class ResourceConstant extends ResourceUsage implements IBenefit {
	add(): void {
		PlayerData.resources[this.type] += this.amount;
	}
	remove(): void {
		PlayerData.resources[this.type] -= this.amount;
		if (PlayerData.resources[this.type] < 0)
			PlayerData.resources[this.type] = 0;
	}
}
/**
 * Generates a set amount of a resource once per tick.
 * 
 * @export
 * @class Generator
 * @extends {ResourceUsage}
 * @implements {IBenefit}
 */
export class Generator extends ResourceUsage implements IBenefit, Tickable {
	add(): void {
		// STUB
	}
	remove(): void {
		// STUB
	}
	tick(multiplier: number = 1): void {
		if (PlayerData.multipliers.hasOwnProperty(this.type) && PlayerData.multipliers[this.type] > 1) {
			multiplier *= PlayerData.multipliers[this.type];
		}
		let amountToGain = (this.amount * multiplier) * (GameSettings.tick / 1000);
		PlayerData.resources[this.type] += Numbers.RoundToPrecision(amountToGain, 2);
	}
}
/**
 * Increases the rate at which a given resource is generated
 * 
 * @export
 * @class Multiplier
 * @extends {ResourceUsage}
 * @implements {IBenefit}
 */
export class Multiplier extends ResourceUsage implements IBenefit {
	add(): void {
		let item = GetItemByName<GameItem>(this.type);
		if (item)	item.multiplier += this.amount;
	}
	remove(): void {
		let item = GetItemByName<GameItem>(this.type);
		if (item) item.multiplier -= this.amount;
	}
}
/**
 * A global multiplier for an item category
 * 
 * @export
 * @class CategoryMultiplier
 * @extends {ResourceUsage} 
 * @implements {IBenefit}
 */
export class CategoryMultiplier extends ResourceUsage implements IBenefit {
	add(): void {
		if (PlayerData.multipliers.hasOwnProperty(this.type))
			PlayerData.multipliers[this.type] += this.amount;
		else PlayerData.multipliers[this.type] = 1 + this.amount;
	}
	remove(): void {
		PlayerData.multipliers[this.type] -= this.amount;
		if (PlayerData.multipliers[this.type] <= 1)
			PlayerData.multipliers = 1;
	}
}
/**
 * Adds a percent chance to recruit the specified unit each tick.
 * 
 * @export
 * @class Recruiter
 * @extends {ResourceUsage}
 * @implements {IBenefit}
 */
export class Recruiter extends ResourceUsage implements IBenefit, Tickable {
	/**
	 * Creates an instance of Recruiter.
	 * @param {string} unitName The unit that it has a chance to recruit
	 * @param {number} chance Percent chance (non-decimal) to recruit per second
	 * 
	 * @memberOf Recruiter
	 */
	constructor(unitName: string, chance: number) {
		super(unitName, chance);
	}
	add(): void {
		// STUB
	}
	remove(): void {
		// STUB
	}
	tick(multiplier: number = 1): void {
		let roll = RNG.Roll(100, 2);
		let recruitChance = this.amount * multiplier;
		if (recruitChance > roll) {
			let item = GetItemByName<GameItem>(this.type);
			item.addToInventory();
			item.cost.forEach(c => c.increaseByFactor());
		}
	}
}
