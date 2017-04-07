import {PlayerData} from '../constants/PlayerData';
import {GameSettings} from '../constants/GameSettings';

/**
 * Represents the strength of an item's alignment with a specific type
 * 
 * @export
 * @class Alignment
 */
export class Alignment {
	/**
	 * Creates an instance of Alignment.
	 * @param {string} [type='none'] The alignment type of the parent item
	 * @param {number} [amount=0] The strength of the alignment
	 * 
	 * @memberOf Alignment
	 */
	constructor(type: string = 'none', amount: number = 0) {
		this.type = type;
		this.amount = amount;
	}
	type: string;
	amount: number;

	/**
	 * Adds this alignment type to the PlayerData, diminishes other alignment types slightly
	 * 
	 * 
	 * @memberOf Alignment
	 */
	add(): void {
		if (!PlayerData.alignment.hasOwnProperty(this.type)) {
			PlayerData.alignment[this.type] = 0;
		}
		// increase this alignment
		PlayerData.alignment[this.type] += this.amount;
		// decrease all other alignments by the alignment decrease factor times this amount.
		for (var prop in PlayerData.alignment) {
			if (PlayerData.alignment.hasOwnProperty(prop) && prop !== this.type) {
				PlayerData.alignment[prop] -= (this.amount * GameSettings.alignmentDecreaseFactor);
			}// TODO: Consider having minimum of zero?
		}
	}
}
