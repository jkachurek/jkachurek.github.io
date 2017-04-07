import {Resources, Alignments} from '../constants/Names';
import {GameItem} from './Items';

/**
 * Model representing the player's information in the game
 * @export
 * @class PlayerData
 */
export class PlayerData {
	constructor() {
		for (var type in Resources) {
			if (Resources.hasOwnProperty(type)) {
				this.resources[Resources[type]] = 0;
				this.generators[Resources[type]] = 0;
				this.multipliers[Resources[type]] = 1;
			}
		}
		for (var type in Alignments) {
			if (Alignments.hasOwnProperty(type)) {
				this.alignment[Alignments[type]] = 0;
			}
		}
	}
	resources: Object = {};
	multipliers: Object = {};
	generators: Object = {};
	inventory: GameItem[] = [];
	alignment: Object = {};
	recruiters: Object = {};
}
