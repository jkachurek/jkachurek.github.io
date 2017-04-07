import * as Names from '../constants/Names';
import {Upgrade} from '../models/Items';
import {Cost, UnitCost} from '../models/Costs';
import {Generator} from '../models/Benefits';
import Repository from './Repository';

export module Upgrades {
	export const Basement = new Upgrade(
		Names.Items.Upgrades.Basement,
		'Sure, it\'s dingy, but Mom and Dad say you can stay as long as you like, and they ' +
			'make a mean meatloaf.',
		Names.Categories.Neutral,
		[
			//costs
		],
		[
			//benefits
		]
	);
	export const StorageLocker = new Upgrade(
		Names.Items.Upgrades.StorageLocker,
		'Sure, it doesn\'t have a ventilation system or running water, but it\'s better than ingesting the ' +
			'neurotoxins and fluoride.',
		Names.Categories.Neutral,
		[
			//costs
		],
		[
			//benefits
		]
	);
}
const UpgradeDb: Array<Upgrade> = [];
for (let prop in Upgrades) {
	if (Upgrades.hasOwnProperty(prop)) {
		UpgradeDb.push(Upgrades[prop]);
	}
}
const UpgradeRepository = new Repository<Upgrade>(UpgradeDb);
export default UpgradeRepository;
