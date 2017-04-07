import * as Names from '../constants/Names';
import {Ritual} from '../models/Items';
import {Cost, UnitCost} from '../models/Costs';
import {Generator, Multiplier, ResourceConstant} from '../models/Benefits';
import {Alignment} from '../models/Alignment';
import Repository from './Repository';

export module Rituals {
	export const Screed = new Ritual(
		Names.Items.Rituals.Screed,
		'An impassioned blog post about your beliefs',
		Names.Categories.Neutral,
		[new Cost(Names.Resources.MONEY, 20)],
		[
			new Generator(Names.Resources.MONEY, 1),
			new Multiplier(Names.Resources.MONEY, 1.1)
			// new Generator(Names.Resources.INFLUENCE, 1),
			// new Multiplier(Names.Resources.INFLUENCE, 1.1)
		],
		10
	);
	export const Vlog = new Ritual(
		Names.Items.Rituals.Vlog,
		'A perfectly reasonable, well-thought-out speech delivered by video to all of your followers',
		Names.Categories.Neutral,
		[
			new Cost(Names.Resources.MONEY, 30)
		],
		[
			new Generator(Names.Resources.MONEY, 1),
			new Multiplier(Names.Resources.MONEY, 1.2)
		],
		15
	);
	export const Sacrifice = new Ritual(
		Names.Items.Rituals.Sacrifice,
		'A human sacrifice',
		Names.Categories.Occult,
		[
			new Cost(Names.Resources.POWER, 100),
			new UnitCost(Names.Items.Units.Member, 5)
		],
		[
			new ResourceConstant(Names.Resources.MONEY, 100),
			new Multiplier(Names.Resources.MONEY, 1.5),
			new Multiplier(Names.Resources.POWER, 1.3)
		],
		15,
		new Alignment(Names.Alignments.ELDRITCH, 12)
	);
}
const RitualDb: Array<Ritual> = [];
for (let prop in Rituals) {
	if (Rituals.hasOwnProperty(prop)) {
		RitualDb.push(Rituals[prop]);
	}
}
const RitualRepository = new Repository<Ritual>(RitualDb);
export default RitualRepository;

// sacrifice
