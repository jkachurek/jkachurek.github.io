import {Locations} from './Locations';
import {Rituals} from './Rituals';
import {Units} from './Units';
import {Upgrades} from './Upgrades';
/**
 * An array of all game items.
 * @export
 */
export const Database: Array<any> = [Locations, Rituals, Units, Upgrades].reduce((all, current) => {
	for (let prop in current) {
		if (current.hasOwnProperty(prop)) {
			all.push(current[prop]);
		}
	}
	return all;
}, []);
