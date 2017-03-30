import Experience from '../models/Experience';
import Repository from './Repository';
namespace ExpCats {
	export const WORK = 'work';
	export const EDUCATION = 'education';
	export const ENGAGEMENT = 'engagement';
}
const ResumeDb: Array<Experience> = [
	new Experience(ExpCats.WORK, 'AmTrust Financial Services',
		'Software Engineer I',
		'August 2016 - Present',
		[
			'Working across the stack with a variety of enterprise .NET web applications, with a focus on the front end.',
			'Building functionality of agent-facing web apps using Angular, jQuery, & ASP.NET MVC.',
			'Creating RESTful APIs and connecting them to front ends.',
			'Refactoring applications to use modern, component-based front ends.',
			'Specific technologies used: ASP.NET MVC, WebAPI, Angular 1.6.x, jQuery, SQL Server, Web Forms',
			'Tools used: Visual Studio, Visual Studio Code, SQL Server Management Studio, Postman'
		]
	),
	new Experience(ExpCats.WORK, 'Sporcle Live Trivia',
		'Trivia Host',
		'June 2015 - Present',
		['Hosting weekly trivia shows around the Greater Cleveland Area.']
	),
	new Experience(ExpCats.WORK, 'Cleveland International Film Festival',
		'Theater Operations Staff (seasonal)',
		'2016 - Present',
		[
			'Seasonal staff position for about a week and a half in March/April',
			'Assisting patrons in finding their destinations around the festival.',
			'Helping to run individual theaters by managing the flow of patrons, scanning passes, and making sure everything runs on time.'
		]
	),
	new Experience(ExpCats.WORK, 'WBWC 88.3 FM The Sting',
		'Various Board Positions (see below)',
		'September 2010 - May 2015',
		[
			'Promotions Director, Spring 2015: Contacting venue promoters, procuring & scheduling giveaways, and coordinating, conducting, & producing interviews',
			'Production Director, Fall 2011 - Spring 2012: Managing station equipment, producing sweeps, underwritings, promos, and more.',
			'Music Director, Summer 2011: Contacting music promoters and helping decide what music is played on the station.'
		]
	),
	new Experience(ExpCats.EDUCATION, 'The Software Guild',
		'.NET/C# Apprentice',
		'May 2016 - August 2016',
		[
			'Learned a variety of practical skills for modern software development through an intensive program led by industry professionals.',
			'Learned industry standard tools and practices, including Agile and Test-Driven Development.'
		]
	),
	new Experience(ExpCats.EDUCATION, 'Baldwin Wallace University',
		'Broadcasting & Mass Communications',
		'2010 - 2015',
		[
			'Board Member, WBWC 88.3 FM The Sting',
			'Pi Lambda Phi Fraternity'
		]
	),
	new Experience(ExpCats.EDUCATION, 'Hawken School, Gates Mills, OH',
		null,
		'Graduated 2010',
		['National Merit Scholar']
	),
	new Experience(ExpCats.ENGAGEMENT, 'Global Game Jam',
		null,
		'2017',
		[
			'Participated at the event hosted by Cleveland Game Devs',
			'Created a simple game with Unity in two days',
			'Worked as one of two programmers along with a designer and musician',
			'See the Projects page for more info'
		]
	),
	new Experience(ExpCats.ENGAGEMENT, 'RailsBridge',
		null,
		'2016',
		[
			'Participated in 2016\'s RailsBridge event in Cleveland, hosted by CoverMyMeds',
			'Learned the basics of setting up a Ruby On Rails dev environment, scaffolding, building, and deploying a small web app.'
		]
	),
	new Experience(ExpCats.ENGAGEMENT, 'Cleveland International Film Festival',
		'Volunteer',
		'2014 - 2015',
		['I was a seasonal volunteer for two years before moving up to seasonal staff.']
	)
];
ResumeDb.forEach((exp, index) => exp.id = (ResumeDb.length - index));
const ResumeRepository = new Repository(ResumeDb);
export default ResumeRepository;
