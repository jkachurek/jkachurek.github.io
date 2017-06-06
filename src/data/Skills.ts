import Skill from '../models/Skill';
import Repository from './Repository';

module SkillCategories {
	export const LANGUAGE = 'Languages';
	export const FRAMEWORK = 'Frameworks';
	export const TOOL = 'Tools';
}

const SkillDb: Array<Skill> = [
	new Skill('Angular 1.x', 9, SkillCategories.FRAMEWORK,
		`I have used AngularJS extensively in personal and work projects.  I have used versions betweeen 1.3.x and 1.6.x,
			so I am comfortable with a wide range of standards for the framework.  My projects using it have included complex
			insurance applications, simple websites (like this one), and even browser games like my Cult Simulator
			project (see the Projects page for details).`
	),
	new Skill('Angular 2+', 7, SkillCategories.FRAMEWORK,
		`I have not worked with modern Angular as much as I have with Angular 1.x,
			but I am still very comfortable with it.  I have used it for a complex
			web application at work and for multiple side projects.  In addition,
			as you can read below, I have used it in conjunction with Redux.`
	),
	new Skill('.NET', 6, SkillCategories.FRAMEWORK,
		`I have used the .NET Framework almost exclusively for the purpose of making web applications,
			so I am not as familiar with the other ways it can be used.  But, given the chance, it should
			not be hard to learn, given my familiarity with .NET MVC.`
	),
	new Skill('.NET Core', 5, SkillCategories.FRAMEWORK,
		`I have done multiple tutorials for .NET Core, and have mocked up alternate version of
		both side projects and work-related applications using .NET Core in conjunction with Angular 2.
		I am mostly comfortable with this due to its similarity to the regular .NET Framework, and how
		well it works with the Node ecosystem.`
	),
	new Skill('Redux', 6, SkillCategories.FRAMEWORK,
		`I have worked with angular-redux, the implementation of Redux for
			Angular 2+, on work projects and am comfortable with its core
			concepts and how to implement them in a complex application.
			Most recently, I used Redux to create an insurance quoting
			application that includes a multi-step workflow with generic
			presentational components for each page.
			I hope to use Redux with React in more advanced applications
			in the near future.`
	),
	new Skill('C#', 8, SkillCategories.LANGUAGE,
		`I am very comfortable with C# for web applications and architecture.  I am still learning
			more about using C# to develop more complex backend functionality, and to create non-web
			applications.`
	),
	new Skill('JavaScript', 8, SkillCategories.LANGUAGE,
		`This being the modern era, I use JavaScript daily at work and on side projects.  I am comfortable with
			vanilla JS as well as more recent specs like ES6.  I have spent time creating several reusable bits of
			code to extend JS's functionality, including new methods of manipulating callbacks, URL parameters,
			object properties, and more.`
	),
	new Skill('TypeScript', 8, SkillCategories.LANGUAGE,
		`I have used TypeScript mostly on personal projects, including this website and the Cult Simulator.
			TypeScript helps me organize code and enforce consistency across my applications. I find it
			especially useful because it makes it very easy to transition a codebase into C#, for example
			if I wanted to move a game from an HTML game to being made in Unity.`
	),
	new Skill('SQL', 5, SkillCategories.LANGUAGE,
		`I am proficient at using SQL for basic data access purposes, but have not worked with it extensively
			to perform complex operations and queries.`
	),
	new Skill('CSS', 6, SkillCategories.LANGUAGE,
		`I am comfortable with basic CSS for web pages, and have used it throughout
			my personal projects.  I typically use Bootstrap on sites (like this one) to speed
			up the development process.  I am in the process of learning how to use Flexbox
			effectively, and will try to use that once I am comfortable with it.  I am also
			comfortable using SASS.`
	),
	new Skill('Visual Studio', 7, SkillCategories.TOOL,
		`I use Visual Studio daily at work because of its ability to manage and build multiple large
			enterprise applications.  I am comfortable with its core functionality, but have yet to explore
			some of its deeper features, especially when you combine it with the extended functionality
			of ReSharper.`
	),
	new Skill('Git', 8, SkillCategories.TOOL,
		`I am very comfortable using Git for source control, whether through the command line or
			through a Git client.  I am still very careful about doing more complex or destructive
			operations, but I am proficient enough for using it properly in a modern development
			environment.`
	),
	new Skill('Node', 7, SkillCategories.TOOL,
		`I have worked with NodeJS and NPM on almost every side project I have worked on, so I am
			very comfortable with using it to create a wide variety of web applications.  I plan to
			use it more for server-side code soon.`
	),
	new Skill('SQL Server Management Studio', 4, SkillCategories.TOOL,
		`I use SSMS at work to query our databases when developing and testing web
			applications.  I have not used many of its more robust features, but am
			comfortable performing basic operations with it.`
	),
	new Skill('Unity 5.x', 5, SkillCategories.TOOL,
		`I have done several tutorials and smaller projects with Unity.  I also used it for my Global
			Game Jam 2017 submission, which can be seen on my Projects page.  Though I have not produced
			a large project with it, I have a solid understanding of the scripting API thanks
			to my knowledge of C#.  I still have much to learn about the Unity Editor itself,
			especially since the more artistic uses of it (animation, spritesheets, materials, etc.)
			aren't exactly my specialty.  But overall, I understand it well enough to learn new things
			with it quickly.`
	)
];
SkillDb.forEach((s, index) => s.id = SkillDb.length - index);

const SkillRepository = new Repository(SkillDb);
export default SkillRepository;
