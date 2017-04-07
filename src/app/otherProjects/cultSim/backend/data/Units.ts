import * as Names from '../constants/Names';
import {Unit} from '../models/Items';
import {Cost, UnitCost} from '../models/Costs';
import {ResourceConstant, Generator, Recruiter} from '../models/Benefits';
import {UnlockInfo, UnitRequirement, AlignmentRequirement, ResourceRequirement} from '../models/Unlocks';
import {Alignment} from '../models/Alignment';
import Repository from './Repository';

export module Units {
	// GENERAL CULT UNITS
		export const Member = new Unit(
			Names.Items.Units.Member,
			'A true believer who is willing to shell out cold hard cash to learn about ' +
				'the dead aliens infesting their soul',
			Names.Categories.Neutral,
			[
				new Cost(Names.Resources.MONEY, 10)
			],
			[
				new ResourceConstant(Names.Resources.INFLUENCE, 1),
				new Generator(Names.Resources.MONEY, 1)
			],
			new UnlockInfo(
				[],
				[
					Names.Items.Units.Cultist,
					Names.Items.Units.Businessman,
					Names.Items.Units.Schoolteacher
				]
			)
		);
		export const Cultist = new Unit(
			Names.Items.Units.Cultist,
			'A member who is willing to share their beliefs with others to grant you favor with ' +
				'the big bundle of tentacles upstairs.',
			Names.Categories.Occult,
			[
				new Cost(Names.Resources.MONEY, 10),
				new UnitCost(Member.name, 1)
			],
			[
				new ResourceConstant(Names.Resources.INFLUENCE, 2),
				new Generator(Names.Resources.POWER, 1)
			],
			new UnlockInfo(
				[
					new UnitRequirement(Names.Items.Units.Member, 3)
				],
				[Names.Items.Units.Acolyte]
			),
			new Alignment(Names.Alignments.ELDRITCH, 5)
		);
		export const Acolyte = new Unit(
			Names.Items.Units.Acolyte,
			'A fancy cultist',
			Names.Categories.Occult,
			[
				new Cost(Names.Resources.POWER, 10),
				new Cost(Names.Resources.MONEY, 10),
				new UnitCost(Names.Items.Units.Cultist, 1)
			],
			[
				new ResourceConstant(Names.Resources.INFLUENCE, 5),
				new Generator(Names.Resources.POWER, 3)
			],
			new UnlockInfo(
				[
					new UnitRequirement(Names.Items.Units.Cultist, 4),
					new UnitRequirement(Names.Items.Locations.Chapel, 1),
					new ResourceRequirement(Names.Resources.INFLUENCE, 50),
					new ResourceRequirement(Names.Resources.POWER, 75),
					new AlignmentRequirement(Names.Alignments.ELDRITCH, 20)
				],
				[]
			),
			new Alignment(Names.Alignments.ELDRITCH, 8)
		);
	// RELIGION UNITS
		export const Preacher = new Unit(
			Names.Items.Units.Preacher,
			'Often seen in their natural habitat of street corners and abortion clinics, these ' +
				'people will tell anyone who listens about their love for the bearded guy above',
			Names.Categories.Religion,
			[
				new Cost(Names.Resources.MONEY, 50),
				new UnitCost(Cultist.name, 1)
			],
			[
				new ResourceConstant(Names.Resources.INFLUENCE, 3),
				new Generator(Names.Resources.POWER, 2),
				new Recruiter(Names.Items.Units.Member, 0.5)
			],
			new UnlockInfo(
				[
					new UnitRequirement(Names.Items.Locations.Chapel, 1)
				],
				[]
			)
		);
		export const Bishop = new Unit(// STUB
			Names.Items.Units.Bishop,
			'DESCRIPTION PENDING',
			Names.Categories.Religion,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
		export const Cardinal = new Unit(// STUB
			Names.Items.Units.Cardinal,
			'DESCRIPTION PENDING',
			Names.Categories.Religion,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
		export const Pope = new Unit(// STUB
			Names.Items.Units.Pope,
			'DESCRIPTION PENDING',
			Names.Categories.Religion,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
	// BUSINESS UNITS
		export const Businessman = new Unit(
			Names.Items.Units.Businessman,
			'Promotes your beliefs through his business practices.  You can find his number on his ' +
				'eggshell business card.',
			Names.Categories.Business,
			[
				new Cost(Names.Resources.MONEY, 50)
			],
			[
				new ResourceConstant(Names.Resources.INFLUENCE, 8),
				new Generator(Names.Resources.MONEY, 8)
			],
			new UnlockInfo(
				[new UnitRequirement(Names.Items.Units.Member, 10)],
				[Names.Items.Units.UpperManagement, Names.Items.Locations.OfficePark]
			)
		);
		export const UpperManagement = new Unit(
			Names.Items.Units.UpperManagement,
			'They can see the chemtrails perfectly from their office on the top floor. This ally ' +
				'will make sure all their contracts sell customers\' souls to the ancient one.',
			Names.Categories.Business,
			[
				new UnitCost(Names.Items.Units.Businessman, 1),
				new Cost(Names.Resources.MONEY, 100),
				new Cost(Names.Resources.POWER, 20)
			],
			[
				new ResourceConstant(Names.Resources.INFLUENCE, 15),
				new Generator(Names.Resources.MONEY, 12),
				new Recruiter(Names.Items.Units.Businessman, 0.3)
			],
			new UnlockInfo(
				[
					new ResourceRequirement(Names.Resources.INFLUENCE, 300),
					new UnitRequirement(Names.Items.Units.Businessman, 10),
					new UnitRequirement(Names.Items.Locations.OfficePark, 2)
				],
				[Names.Items.Locations.Skyscraper]
			)
		);
	// EDUCATION UNITS
		export const Schoolteacher = new Unit(
			Names.Items.Units.Schoolteacher,
			'This loyal subject will make sure their students know that man didn\'t descend from monkeys. ' +
				'It\'s obvious from our vestigial tentacles that we are descended from Cthulu himself.',
			Names.Categories.Education,
			[
				new Cost(Names.Resources.MONEY, 60)
			],
			[
				new ResourceConstant(Names.Resources.INFLUENCE, 8),
				new Generator(Names.Resources.POWER, 1),
				new Generator(Names.Resources.MONEY, 1),
				new Recruiter(Names.Items.Units.Member, 0.2)
			],
			new UnlockInfo(
				[
					new ResourceRequirement(Names.Resources.INFLUENCE, 100),
					new UnitRequirement(Names.Items.Units.Member, 12)
				],
				[Names.Items.Locations.School]
			)
		);
	// MASS MEDIA UNITS
		export const Reporter = new Unit(// STUB
			Names.Items.Units.Reporter,
			'DESCRIPTION PENDING',
			Names.Categories.MassMedia,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
		export const RadioHost = new Unit(// STUB
			Names.Items.Units.RadioHost,
			'DESCRIPTION PENDING',
			Names.Categories.MassMedia,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
		export const NewsAnchor = new Unit(// STUB
			Names.Items.Units.NewsAnchor,
			'DESCRIPTION PENDING',
			Names.Categories.MassMedia,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
		export const Pundit = new Unit(// STUB
			Names.Items.Units.Pundit,
			'DESCRIPTION PENDING',
			Names.Categories.MassMedia,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
		export const MediaMogul = new Unit(// STUB
			Names.Items.Units.MediaMogul,
			'DESCRIPTION PENDING',
			Names.Categories.MassMedia,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
	// POLITICS UNITS
		export const Mayor = new Unit(// STUB
			Names.Items.Units.Mayor,
			'DESCRIPTION PENDING',
			Names.Categories.Politics,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
		export const Governor = new Unit(// STUB
			Names.Items.Units.Governor,
			'DESCRIPTION PENDING',
			Names.Categories.Politics,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
		export const Congressman = new Unit(// STUB
			Names.Items.Units.Congressman,
			'DESCRIPTION PENDING',
			Names.Categories.Politics,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
		export const Senator = new Unit(// STUB
			Names.Items.Units.Senator,
			'DESCRIPTION PENDING',
			Names.Categories.Politics,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
		export const Judge = new Unit(// STUB
			Names.Items.Units.Judge,
			'DESCRIPTION PENDING',
			Names.Categories.Politics,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);
		export const President = new Unit(// STUB
			Names.Items.Units.President,
			'DESCRIPTION PENDING',
			Names.Categories.Politics,
			[
				//cost
			],
			[
				//benefits,
			],
			new UnlockInfo([],[]),
			null // alignment
		);

	//
}
const UnitDb: Array<Unit> = [];
for (let prop in Units) {
	if (Units.hasOwnProperty(prop)) {
		UnitDb.push(Units[prop]);
	}
}
const UnitRepository = new Repository<Unit>(UnitDb);
export default UnitRepository;
