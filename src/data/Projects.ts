import Project from '../models/Project';
import Repository from './Repository';

const ProjectDb: Array<Project> = [
	new Project('Transceiver Retriever',
		'January 2018',
		`The theme for Global Game Jam 2018 was "transmission," so my team created a game where you control a
			robot and attempt to retrieve a briefcase from an office.  The catch is that you only see the game
			from the perspective of the security cameras in the office, so you need to adapt how you control
			the robot and create a mental map of the level as you play.  Given the time limit, I am extremely
			satisfied with how this project turned out.  You can find a downloadable version of the game at
			the link below. 
		`,
		['Unity Engine', 'C#'],
		'https://globalgamejam.org/2018/games/transceiver-retriever',
		[]
	),
	new Project('This Website',
		'Redesigned in Winter 2017',
		`You're looking at it.  This website is built using several things, most notably Angular 1.6.x, TypeScript, SASS, Webpack,
			& Gulp.  The site is component-based, as you can see in the source code linked below.  I am currently working
			on redesigning it yet again in React, since I use it professionally and I prefer it personally.`,
		['Angular 1.6', 'TypeScript'],
		'https://github.com/jkachurek/jkachurek.github.io',
		[]
	),
	new Project(
		'Cult Simulator',
		'February 2017 - May 2017',
		`A clicker/incremental game where the theme is building up a cult and expanding your empire. This was my first time using
			TypeScript to make something with a large amount of logic. It taught me a great deal about all the OOP-style features
			that TS includes, which made it much easier to code a game. The game needs more content and balancing, but the core
			mechanics of it are solid. If you want to give it a shot, click the link below!  The source code for this playable version
			is in a folder of this website's repository if you want to give it a look.`,
		['Angular 1.6', 'TypeScript'],
		'/cultSim'
	),
	new Project('Synth Wave Rider',
		'January 2017',
		`A simple, rhythm-based game created using Unity Engine for the 2017 Global Game Jam.  I was one of two programmers, along with a 
			designer and a musician.  My first actual project using Unity, it taught me a lot in the two-day time limit
			of the Game Jam. The link features a downloadable version of the game.`,
		['Unity Engine', 'C#'],
		'https://globalgamejam.org/2017/games/synth-wave-rider',
		[]
	),
	new Project('xFid Encryption Application',
		'Summer 2016',
		`One of my first side projects ever from when I was just learning C#.
			From time to time, I have been working on porting this project to a website
			application built with TypeScript. This is an experimental console application
			expanding the functionality of a traditional trifid cipher from 3x3x3 to 5x5x5,
			with support for encrypting digits, specific casing, and a selection of
			punctuation	and Latin characters. It allows for random cipher generation, saving
			created keys and messages, and encrypting through multiple passes
			of the same key. This allows the user to have 125 factorial 
			potential solutions to a single encryption, times the number of times
			the message is passed through the cipher.`,
		['C#', '.NET Framework'],
		'https://github.com/jkachurek/xFid',
		[
			// 'messageDbSample.png',
			// 'defaultCipher.png',
			// 'encryptionSample.png',
			// 'decryptionFlowSample.png',
			// 'cipherDbSample.png'
		].map(s => `static/images/projects/xfid/${s}`)
	)
];
ProjectDb.forEach((p, index) => p.id = (ProjectDb.length - index));
const ProjectRepository = new Repository(ProjectDb);
export default ProjectRepository;
