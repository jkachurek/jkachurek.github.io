import {ResourceUsage} from './ResourceUsage';
import {PlayerData} from '../constants/PlayerData';
import {GetItemByName} from '../util/DataQueries';
import {GameItem} from './Items';
import * as Names from '../constants/Names';
import {ResourceConstant} from './Benefits';

/**
 * Defines what an item needs to be unlocked and what items it helps to unlock.
 * @export
 * @class UnlockInfo
 */
export class UnlockInfo {
	/**
	 * Creates an instance of UnlockInfo.
	 * @param {IRequirement[]} unlockRequirements An array of the requirements needed to unlock the parent item.
	 * @param {string[]} requiredToUnlock An array of names of items that the parent item is required to unlock.
	 * 
	 * @memberOf UnlockInfo
	 */
	constructor (unlockRequirements: IRequirement[], requiredToUnlock: string[]) {
		this.unlockRequirements = unlockRequirements;
		this.requiredToUnlock = requiredToUnlock;
	}
	unlockRequirements: IRequirement[];
	requiredToUnlock: string[];

	/**
	 * Checks if each requirement in unlockRequirements is satisfied.
	 * 
	 * @returns {boolean} Are all requirements satisfied?
	 * 
	 * @memberOf UnlockInfo
	 */
	checkAllRequirements(): boolean {
		return this.unlockRequirements.reduce((allReqsMet: boolean, req: IRequirement) => {
				return req.isRequirementMet() && allReqsMet;
			}, true);
	}
}
/**
 * Defines behavior of a requirement
 * @export
 * @interface IRequirement
 */
export interface IRequirement {
	type: string;
	amount: number;
	/**
	 * Is the requirement met?
	 * 
	 * @returns {boolean} 
	 * 
	 * @memberOf IRequirement
	 */
	isRequirementMet(): boolean;
}
/**
 * Defines a number of a specific unit required to unlock another item.
 * @export
 * @class UnitRequirement
 * @extends {ResourceUsage}
 * @implements {IRequirement}
 */
export class UnitRequirement extends ResourceUsage implements IRequirement {
	/**
	 * Creates an instance of UnitRequirement.
	 * @param {string} item The name of the required unit
	 * @param {number} amount The amount required.
	 * 
	 * @memberOf UnitRequirement
	 */
	constructor (item: string, amount: number) { super(item, amount); }

	isRequirementMet(): boolean {
		return GetItemByName<GameItem>(this.type).amountOwned >= this.amount;
	}
}
/**
 * Defines an amount of a specific resource required to unlock an item.
 * @export
 * @class ResourceRequirement
 * @extends {ResourceUsage}
 * @implements {IRequirement}
 */
export class ResourceRequirement extends ResourceUsage implements IRequirement {
	/**
	 * Creates an instance of ResourceRequirement.
	 * @param {string} resourceType The name of the resource required
	 * @param {number} amount The amount required
	 * 
	 * @memberOf ResourceRequirement
	 */
	constructor (resourceType: string, amount: number) { super(resourceType, amount); }
	isRequirementMet(): boolean {
		return PlayerData.resources.hasOwnProperty(this.type) &&
					 PlayerData.resources[this.type] >= this.amount;
	}
}
/**
 * Defines an amount of a specific alignment type required to unlock an item
 * @export
 * @class AlignmentRequirement
 * @extends {ResourceUsage}
 * @implements {IRequirement}
 */
export class AlignmentRequirement extends ResourceUsage implements IRequirement {
	constructor (alignmentType: string, amount: number) { super(alignmentType, amount); }

	isRequirementMet(): boolean {
		return PlayerData.alignment.hasOwnProperty(this.type) &&
					 PlayerData.alignment[this.type] >= this.amount;
	}
}
/**
 * Defines an amount of items owned from a specific category required to unlock an item
 * @export
 * @class CategoryInventoryRequirement
 * @extends {ResourceUsage}
 * @implements {IRequirement}
 */
export class CategoryInventoryRequirement extends ResourceUsage implements IRequirement {
	constructor (category: string, amount: number) { super(category, amount); }

	isRequirementMet(): boolean {
		return PlayerData.inventory
				.filter((item: GameItem) => item.category === this.type) // filter to only items of this category
				.reduce((tot: number, cur: GameItem) => tot + cur.amountOwned, 0) // add up how many owned
				>= this.amount;
	}
}
/**
 * Defines an amount of influence gained from items in a specific category required to unlock an item
 * @export
 * @class CategoryInfluenceRequirement
 * @extends {ResourceUsage}
 * @implements {IRequirement}
 */
export class CategoryInfluenceRequirement extends ResourceUsage implements IRequirement {
	constructor (category: string, amount: number) { super(category, amount); }

	isRequirementMet(): boolean {
		if (PlayerData.resources.hasOwnProperty('influence'))
			return PlayerData.inventory
				.filter((item: GameItem) => item.category === this.type) // filter inventory by category
				.reduce((tot: number, cur: GameItem) => { // find all influence resource constants
					let inf = cur.benefits.find(ben => (ben.type === Names.Resources.INFLUENCE && ben instanceof ResourceConstant));
					return inf ? tot + inf.amount : tot;
				}, 0) // get sum of influence values
				>= this.amount;
	}
}
