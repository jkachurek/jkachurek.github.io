import SkillModel from './skillModel';

export module SkillCategories {
	export const LANGUAGE = 'Languages';
	export const FRAMEWORK = 'Frameworks';
	export const TOOL = 'Tools';
}

export module SkillData {
	export const Frameworks: SkillModel[] = [
		new SkillModel('Angular 1.x', 9, SkillCategories.FRAMEWORK,
			`I have used AngularJS extensively in personal and work projects.  I have used versions betweeen 1.3.x and 1.6.x,
				so I am comfortable with a wide range of standards for the framework.  My projects using it have included complex
				insurance applications, simple websites (like this one), and even browser games like my Cult Simulator
				project (see the Projects page for details).`
		),
		new SkillModel('Angular 2+', 5, SkillCategories.FRAMEWORK,
			`I have dabbled in Angular 2+, but have not produced any finished products with it.  I am
				comfortable with it for creating and routing between views, but have not had the chance
				to use it to work with complex data or APIs.`
		),
		new SkillModel('.NET', 6, SkillCategories.FRAMEWORK,
			`I have used the .NET Framework almost exclusively for the purpose of making web applications,
				so I am not as familiar with the other ways it can be used.  But, given the chance, it should
				not be hard to learn, given my familiarity with .NET MVC.`
		),
		new SkillModel('.NET Core', 5, SkillCategories.FRAMEWORK,
			`I have done multiple tutorials for .NET Core, and have mocked up alternate version of
			both side projects and work-related applications using .NET Core in conjunction with Angular 2.
			I am mostly comfortable with this due to its similarity to the regular .NET Framework, and how
			well it works with the Node ecosystem.`
		)
	];
	export const Languages: SkillModel[] = [
		new SkillModel('JavaScript', 8, SkillCategories.LANGUAGE,
			`This being the modern era, I use JavaScript daily at work and on side projects.  I am comfortable with
				vanilla JS as well as more recent specs like ES6.  I have spent time creating several reusable bits of
				code to extend JS's functionality, including new methods of manipulating callbacks, URL parameters,
				object properties, and more.`
		),
		new SkillModel('C#', 8, SkillCategories.LANGUAGE,
			`I am very comfortable with C# for web applications and architecture.  I am still learning
				more about using C# to develop more complex backend functionality, and to create non-web
				applications.`
		),
		new SkillModel('TypeScript', 8, SkillCategories.LANGUAGE,
			`I have used TypeScript mostly on personal projects, including this website and the Cult Simulator.
				TypeScript helps me organize code and enforce consistency across my applications. I find it
				especially useful because it makes it very easy to transition a codebase into C#, for example
				if I wanted to move a game from an HTML game to being made in Unity.`
		)
	];
	export const Tools: SkillModel[] = [
		new SkillModel('Visual Studio', 7, SkillCategories.TOOL,
			`I use Visual Studio daily at work because of its ability to manage and build multiple large
				enterprise applications.  I am comfortable with its core functionality, but have yet to explore
				some of its deeper features, especially when you combine it with the extended functionality
				of ReSharper.`
		)
	]
}

/** A paragraph explaining my other skills */
export const OtherSkills: string = `
		In addition to the above skills, I have dabbled in several other frameworks and languages.
		I attended a RailsBridge event, which gave me a basic understanding of Ruby and Rails. I have
		also done tutorials and small projects using Electron, React/Redux, Python, Ember, Flask,
		and Vue.  While I do not have many fully-functioning applications using these skills, I have
		applied much of what I learned with them to my other work.  An example of this would be
		trying to use Redux's philosophy on immutable data in my Angular projects, even though they
		don't use Redux itself.
	`;
