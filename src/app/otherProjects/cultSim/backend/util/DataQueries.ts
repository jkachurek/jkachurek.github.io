import {Database} from '../data/Database';
import {GameItem} from '../models/Items';

/**
 * Retrieves item of type T from game database
 * 
 * @export
 * @template T The type to which to cast the return
 * @param {string} name Class name of the item to find
 * @returns {T} the found item
 */
export function GetItemByName<T>(name: string): T {
	return Database.find(item => item.name === name) as T;
}

export function GetItemsByCategory(category: string): GameItem[] {
	return Database.filter((item: GameItem) => item.category === category);
}

export function GetItemsByProperty(propName: string, propValue: any): GameItem[] {
	if (GameItem.prototype.hasOwnProperty(propName))
		return Database.filter(item => item[propName] === propValue);
	else
		throw new Error ('Error finding GameItems: invalid property name');
}

export function GetItemsbyExpression(callback: Function) {
	return Database.filter(item => callback(item));
}

/**
 * Checks every game item to see if they are affordable.
 * 
 * @export
 */
export function CheckAllItemsAffordability(): void {
	Database.forEach((item: GameItem) => {
		item.isAffordable = item.cost.reduce((aff, c) => aff && c.isAffordable(), true);
	});
}

/**
 * Checks all items to see if they are/should be unlocked
 * 
 * @export
 */
export function CheckAllItemsUnlocked(): void {
	Database.forEach((item: GameItem) => {
		if (!item.isUnlocked) item.isUnlocked = item.unlockInfo.checkAllRequirements(); 
	});
}
