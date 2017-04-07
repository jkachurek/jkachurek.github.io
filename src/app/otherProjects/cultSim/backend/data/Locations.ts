import * as Names from '../constants/Names';
import {Location} from '../models/Items';
import {Cost, UnitCost} from '../models/Costs';
import {ResourceConstant, Generator, Multiplier, CategoryMultiplier, Recruiter} from '../models/Benefits';
import {UnlockInfo, UnitRequirement, AlignmentRequirement, ResourceRequirement} from '../models/Unlocks';
import {Alignment} from '../models/Alignment';
import Repository from './Repository';

export module Locations {
	export const Chapel = new Location(
		Names.Items.Locations.Chapel,
		'A small place of worship',
		Names.Categories.Neutral,
		[
			new Cost(Names.Resources.MONEY, 50)
		],
		[
			new ResourceConstant(Names.Resources.INFLUENCE, 10)
		],
		new UnlockInfo(
			[
				new ResourceRequirement(Names.Resources.INFLUENCE, 15),
				new UnitRequirement(Names.Items.Units.Cultist, 3)
			],
			[Names.Items.Units.Preacher, Names.Items.Units.Acolyte]
		)
	);
	export const OfficePark = new Location(
		Names.Items.Locations.OfficePark,
		'A small neighborhood office park.',
		Names.Categories.Business,
		[
			new Cost(Names.Resources.MONEY, 200)
		],
		[
			new ResourceConstant(Names.Resources.INFLUENCE, 25),
			new CategoryMultiplier(Names.Categories.Business, 1.05)
		],
		new UnlockInfo(
			[
				new ResourceRequirement(Names.Resources.INFLUENCE, 35),
				// new ResourceRequirement(Names.Resources.MONEY, 200),
				new UnitRequirement(Names.Items.Units.Member, 12)
			],
			[Names.Items.Units.Businessman]
		)
	);
	export const School = new Location(
		Names.Items.Locations.School,
		'A place of learning',
		Names.Categories.Education,
		[
			new Cost(Names.Resources.MONEY, 200)
		],
		[
			new ResourceConstant(Names.Resources.INFLUENCE, 30),
			new CategoryMultiplier(Names.Categories.Education, 1.03)
		],
		new UnlockInfo(
			[
				new ResourceRequirement(Names.Resources.INFLUENCE, 40),
				new UnitRequirement(Names.Items.Units.Member, 15),
				new UnitRequirement(Names.Items.Units.Schoolteacher, 3)
			],
			[
				//should unlock university
			]
		)
	);
	export const Skyscraper = new Location(
		Names.Items.Locations.Skyscraper,
		'It\'s pretty tall',
		Names.Categories.Business,
		[
			new Cost(Names.Resources.MONEY, 1000),
			new Cost(Names.Resources.POWER, 400)
		],
		[
			new ResourceConstant(Names.Resources.INFLUENCE, 100),
			new CategoryMultiplier(Names.Categories.Business, 1.1)
		],
		new UnlockInfo(
			[
				new ResourceRequirement(Names.Resources.INFLUENCE, 400),
				new UnitRequirement(Names.Items.Units.Businessman, 10),
				new ResourceRequirement(Names.Resources.MONEY, 10000),
				new ResourceRequirement(Names.Resources.POWER, 1200)
			],
			[/*Names.Items.Units.CEO*/]
		)
	);
	export const Church = new Location(
		Names.Items.Locations.Church,
		'DESCRIPTION PENDING',
		Names.Categories.Religion,
		[
			new Cost(Names.Resources.MONEY, 350),
			new Cost(Names.Resources.POWER, 30)
		],
		[
			new ResourceConstant(Names.Resources.INFLUENCE, 75),
			new Generator(Names.Resources.POWER, 5),
			new CategoryMultiplier(Names.Categories.Religion, 1.1)
		],
		new UnlockInfo(
			[
				new UnitRequirement(Names.Items.Units.Preacher, 5),
				new UnitRequirement(Names.Items.Units.Acolyte, 3),
				new UnitRequirement(Names.Items.Locations.Chapel, 3),
				new ResourceRequirement(Names.Resources.INFLUENCE, 350),
				new ResourceRequirement(Names.Resources.POWER, 2000)
			],
			[]
		)
	);
}
const LocationDb: Array<Location> = [];
for (let prop in Locations) {
	if (Locations.hasOwnProperty(prop)) {
		LocationDb.push(Locations[prop]);
	}
}
const LocationRepository = new Repository<Location>(LocationDb);
export default LocationRepository;
//media
	// newspaper
	// radio station
	// tv station
//politics

