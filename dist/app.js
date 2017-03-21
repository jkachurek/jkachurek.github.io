webpackJsonp([0],[,,function(t,e){},function(t,e,n){"use strict";e.__esModule=!0,n(14),e.FooterComponent={template:n(20),controller:function(){this.year=(new Date).getFullYear()}}},function(t,e,n){"use strict";e.__esModule=!0,n(15),e.HeaderComponent={template:n(21)}},function(t,e,n){"use strict";function i(){var t=this;t.icons=[new s("https://github.com/jkachurek","static/images/github-logo.svg"),new s("https://www.linkedin.com/in/john-kachurek","static/images/linkedin-logo.svg"),new s("http://stackoverflow.com/users/6599088/jkachurek","static/images/stackoverflow.svg"),new s("mailto:john.kachurek@gmail.com","static/images/close-envelope.svg")],t.navLinks=["Skills","Resume","Projects"]}e.__esModule=!0,n(16),e.NavComponent={template:n(22),controller:i};var s=function(){function t(t,e){this.link=t,this.img=e}return t}()},function(t,e,n){"use strict";function i(){this.projects=s.ProjectData}e.__esModule=!0;var s=n(29);n(17),e.ProjectsComponent={template:n(23),controller:i}},function(t,e,n){"use strict";e.__esModule=!0,e.ResumeItem={template:n(24),bindings:{item:"<"}}},function(t,e,n){"use strict";function i(){var t=this;t.$onInit=function(){t.sections=[new a("Work","static/images/briefcase.svg",s.ResumeData.Work),new a("Engagement","static/images/bullhorn.svg",s.ResumeData.Engagement),new a("Education","static/images/mortarboard.svg",s.ResumeData.Education)],t.activeSection=t.sections[0]}}e.__esModule=!0;var s=n(32);n(18),e.ResumeComponent={template:n(25),controller:i};var a=function(){function t(t,e,n){this.name=t,this.img=e,this.contents=n}return t}()},function(t,e,n){"use strict";e.__esModule=!0,e.SkillCategoryPanel={template:n(26),bindings:{category:"<",skills:"<"},controller:function(){this.show=!0}}},function(t,e,n){"use strict";e.__esModule=!0,e.SkillPanel={template:n(27),bindings:{skill:"<"}}},function(t,e,n){"use strict";e.__esModule=!0;var i=n(33),s=n(35);n(19),e.SkillsComponent={template:n(28),controller:function(){this.skills=i.SkillData,this.otherSkills=i.OtherSkills;for(var t in this.skills)this.skills.hasOwnProperty(t)&&this.skills[t].sort(s.SortByProp("proficiency"))}}},function(t,e){"use strict";function n(t,e,n){n.html5Mode(!0).hashPrefix("!"),e.otherwise("/resume"),t.state("resume",{url:"/resume",component:"resume"}).state("projects",{url:"/projects",component:"projects"}).state("skills",{url:"/skills",component:"skills"})}n.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],e.__esModule=!0,e.default=n},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports='<hr />\r\n<p class="footer-text">&copy;{{($ctrl.year)}} &mdash; John Kachurek</p>\r\n'},function(t,e){t.exports='<div class="row">\r\n\t<div class="col-sm-4 col-xs-12">\r\n\t\t<img ng-src="static/images/meCrop2.jpg" class="img-circle img-responsive content-center profile-img" width="268" height="268"/>\r\n\t</div>\r\n\t<div class="col-sm-8 col-xs-12">\r\n\t\t<div class="well well-lg header-well">\r\n\t\t\t<span class="header-display">\r\n\t\t\t\t<h1 class="large-txt hidden-xs">John Kachurek</h1>\r\n\t\t\t\t<h2 class="small-txt visible-xs-block">John Kachurek</h2>\r\n\t\t\t</span>\r\n\t\t\t<h3 class="subheader" id="subtitle">Full Stack Developer</h3>\r\n\r\n\t\t\t\tI am a Cleveland-based software developer, specializing in .NET/C# and JavaScript,\r\n\t\t\t\twith a background in broadcasting, audio production, and promotions.\r\n\t\t\t\tMy passion lies in creative problem solving, whether through code or\r\n\t\t\t\totherwise, and I thrive on overcoming unique challenges. I am\r\n\t\t\t\tconstantly seeking new projects and languages to explore, and\r\n\t\t\t\tam a quick learner with new technologies.\r\n\t\t</div>\r\n\t</div>\r\n</div>'},function(t,e){t.exports='<div class="row">\r\n\t<span id="navIcons">\r\n\t\t<div class="col-sm-1 col-xs-3 bottom-spacing" ng-repeat="icon in $ctrl.icons">\r\n\t\t\t<a ng-href="{{icon.link}}" target="_blank"><img ng-src="{{icon.img}}" class="nav-icon"></a>\r\n\t\t</div>\r\n\t</span>\r\n\t<div class="col-sm-8 col-xs-12">\r\n\t\t<ul class="nav nav-pills">\r\n\t\t\t<li ng-repeat="link in $ctrl.navLinks" role="presentation" class="bg-info" ui-sref-active="active">\r\n\t\t\t\t<a ui-sref="{{link.toLowerCase()}}" ui-sref-active="active-color">{{link}}</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n'},function(t,e){t.exports='<div class="row">\r\n\t<div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12">\r\n\t\t<div class="row" ng-repeat="proj in $ctrl.projects">\r\n\t\t\t<div class="panel panel-default">\r\n\t\t\t\t<div class="panel-heading">\r\n\t\t\t\t\t<strong class="panel-title">{{proj.title}}</strong>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="panel-body">\r\n\t\t\t\t\t<p>{{proj.description}}</p>\r\n\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t<div ng-show="proj.link" class="col-xs-6 col-sm-4 col-md-3">\r\n\t\t\t\t\t\t\t<a ng-href="{{proj.link}}" target="_blank" class="btn btn-primary">View Project</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div ng-show="proj.images.length" class="col-xs-6 col-sm-4 col-md-3">\r\n\t\t\t\t\t\t\t<a class="btn btn-primary">View Screenshots</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'},function(t,e){t.exports='<div class="panel panel-default">\r\n\t<div class="panel-heading">\r\n\t\t<strong>{{$ctrl.item.location}}</strong><span ng-if="$ctrl.item.position">&nbsp;&nbsp;//&nbsp;&nbsp;</span>\r\n\t\t{{$ctrl.item.position}}<span ng-if="$ctrl.item.dates">&nbsp;&nbsp;//&nbsp;&nbsp;</span>\r\n\t\t<em>{{$ctrl.item.dates}}</em>\r\n\t</div>\r\n\t<div class="panel-body">\r\n\t\t<ul>\r\n\t\t\t<li ng-repeat="bullet in $ctrl.item.bullets">{{bullet}}</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n'},function(t,e){t.exports='<div class="row">\r\n\t<div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12">\r\n\t\t<div class="row experience-section-header">\r\n\t\t\t<div class="col-xs-4 " ng-repeat="section in $ctrl.sections"\r\n\t\t\t\t\t\t\t\t\t\tng-class="{\'active-section\': $ctrl.activeSection == section}">\r\n\t\t\t\t<img ng-src="{{section.img}}" class="img-responsive content-center pointer"\r\n\t\t\t\t\t\tng-class="{\'active-section\': $ctrl.activeSection == section}"\r\n\t\t\t\t\t\tng-click="$ctrl.activeSection = section" height="75" width="75">\r\n\t\t\t\t<div class="pointer" ng-click="$ctrl.activeSection = section">\r\n\t\t\t\t\t<div class="pointer large hidden-xs">{{section.name}}</div>\r\n\t\t\t\t\t<div class="pointer small visible-xs-block">{{section.name}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row">\r\n\t\t\t<resume-item ng-repeat="item in $ctrl.activeSection.contents" item="item"></resume-item>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'},function(t,e){t.exports='<div class="panel panel-default">\r\n\t<div class="panel-heading category-header" ng-click="$ctrl.show = !$ctrl.show">\r\n\t\t<h2 class="font-montserrat-bold panel-title">{{$ctrl.category}}</h2>\r\n\t</div>\r\n\t<div class="panel-body" ng-show="$ctrl.show">\r\n\t\t<div class="panel-group">\r\n\t\t\t<skill-panel ng-repeat="skill in $ctrl.skills" skill="skill"></skill-panel>\r\n\t\t</div>\r\n\t</div>\r\n</div>'},function(t,e){t.exports='<div class="panel panel-info">\r\n\t<div class="panel-heading skill-header" ng-click="$ctrl.show = !$ctrl.show">\r\n\t\t<span class="panel-title font-montserrat-bold">{{$ctrl.skill.name}}</span>\r\n\t</div>\r\n\t<div class="panel-body" ng-show="$ctrl.show">{{$ctrl.skill.details}}</div>\r\n</div>'},function(t,e){t.exports='<div class="row">\r\n\t<div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-sm-10 col-sm-offset-1 col-xs-12">\r\n\t\t\t\t<div class="text-center text-info">\r\n\t\t\t\t\t<p><i>Click the headers to view details</i></p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-xs-12">\r\n\t\t\t\t<div class="panel-group">\r\n\t\t\t\t\t<skill-category-panel ng-repeat="(categoryName, skillsArray) in $ctrl.skills"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcategory="categoryName" skills="skillsArray"></skill-category-panel>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-sm-10 col-sm-offset-1 col-xs-12">\r\n\t\t\t\t<div class="well">\r\n\t\t\t\t\t<p class="text-justify">{{$ctrl.otherSkills}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'},function(t,e,n){"use strict";e.__esModule=!0;var i=n(30);e.ProjectData=[new i.default("Synth Wave Rider","January 2017","A simple, rhythm-based game created using Unity Engine for the 2017 Global Game Jam.  I was one of two programmers, along with a \n\t\t\tdesigner and a musician.  My first actual project using Unity, it taught me a lot in the two-day time limit\n\t\t\tof the Game Jam. The link features a downloadable version of the game.","http://globalgamejam.org/2017/games/synth-wave-rider",[])]},function(t,e){"use strict";e.__esModule=!0;var n=function(){function t(t,e,n,i,s){this.title=t,this.description=n,this.link=i,this.images=s}return t}();e.default=n},function(t,e){"use strict";e.__esModule=!0;var n=function(){function t(t,e,n,i){this.location=t,this.position=e,this.dates=n,this.header=[t,e,n].join("\n"),this.bullets=i}return t}();e.default=n},function(t,e,n){"use strict";e.__esModule=!0;var i,s=n(31);!function(t){t.Work=[new s.default("AmTrust Financial Services","Software Engineer I","August 2016 - Present",["Working across the stack with a variety of enterprise .NET web applications, with a focus on the front end.","Building functionality of agent-facing web apps using Angular, jQuery, & ASP.NET MVC.","Creating RESTful APIs and connecting them to front ends.","Refactoring applications to use modern, component-based front ends.","Specific technologies used: ASP.NET MVC, WebAPI, Angular 1.6.x, jQuery, SQL Server, Web Forms","Tools used: Visual Studio, Visual Studio Code, SQL Server Management Studio, Postman"]),new s.default("Sporcle Live Trivia","Trivia Host","June 2015 - Present",["Hosting weekly trivia shows around the Greater Cleveland Area."]),new s.default("Cleveland International Film Festival","Theater Operations Staff (seasonal)","2016 - Present",["Seasonal staff position for about a week and a half in March/April","Assisting patrons in finding their destinations around the festival.","Helping to run individual theaters by managing the flow of patrons, scanning passes, and making sure everything runs on time."]),new s.default("WBWC 88.3 FM The Sting","Various Board Positions (see below)","September 2010 - May 2015",["Promotions Director, Spring 2015: Contacting venue promoters, procuring & scheduling giveaways, and coordinating, conducting, & producing interviews","Production Director, Fall 2011 - Spring 2012: Managing station equipment, producing sweeps, underwritings, promos, and more.","Music Director, Summer 2011: Contacting music promoters and helping decide what music is played on the station."])],t.Education=[new s.default("The Software Guild",".NET/C# Apprentice","May 2016 - August 2016",["Learned a variety of practical skills for modern software development through an intensive program led by industry professionals.","Learned industry standard tools and practices, including Agile and Test-Driven Development."]),new s.default("Baldwin Wallace University","Broadcasting & Mass Communications","2010 - 2015",["Board Member, WBWC 88.3 FM The Sting","Pi Lambda Phi Fraternity"]),new s.default("Hawken School, Gates Mills, OH",null,"Graduated 2010",["National Merit Scholar"])],t.Engagement=[new s.default("Global Game Jam",null,"2017",["Participated at the event hosted by Cleveland Game Devs","Created a simple game with Unity in two days","Worked as one of two programmers along with a designer and musician","See the Projects page for more info"]),new s.default("RailsBridge",null,"2016",["Participated in 2016's RailsBridge event in Cleveland, hosted by CoverMyMeds","Learned the basics of setting up a Ruby On Rails dev environment, scaffolding, building, and deploying a small web app."]),new s.default("Cleveland International Film Festival","Volunteer","2014 - 2015",["I was a seasonal volunteer for two years before moving up to seasonal staff."])]}(i=e.ResumeData||(e.ResumeData={}))},function(t,e,n){"use strict";e.__esModule=!0;var i,s=n(34);!function(t){t.LANGUAGE="Languages",t.FRAMEWORK="Frameworks",t.TOOL="Tools"}(i=e.SkillCategories||(e.SkillCategories={}));var a;!function(t){t.Frameworks=[new s.default("Angular 1.x",9,i.FRAMEWORK,"I have used AngularJS extensively in personal and work projects.  I have used versions betweeen 1.3.x and 1.6.x,\n\t\t\t\tso I am comfortable with a wide range of standards for the framework.  My projects using it have included complex\n\t\t\t\tinsurance applications, simple websites (like this one), and even browser games like my Cult Simulator\n\t\t\t\tproject (see the Projects page for details)."),new s.default("Angular 2+",5,i.FRAMEWORK,"I have dabbled in Angular 2+, but have not produced any finished products with it.  I am\n\t\t\t\tcomfortable with it for creating and routing between views, but have not had the chance\n\t\t\t\tto use it to work with complex data or APIs."),new s.default(".NET",6,i.FRAMEWORK,"I have used the .NET Framework almost exclusively for the purpose of making web applications,\n\t\t\t\tso I am not as familiar with the other ways it can be used.  But, given the chance, it should\n\t\t\t\tnot be hard to learn, given my familiarity with .NET MVC."),new s.default(".NET Core",5,i.FRAMEWORK,"I have done multiple tutorials for .NET Core, and have mocked up alternate version of\n\t\t\tboth side projects and work-related applications using .NET Core in conjunction with Angular 2.\n\t\t\tI am mostly comfortable with this due to its similarity to the regular .NET Framework, and how\n\t\t\twell it works with the Node ecosystem.")],t.Languages=[new s.default("JavaScript",8,i.LANGUAGE,"This being the modern era, I use JavaScript daily at work and on side projects.  I am comfortable with\n\t\t\t\tvanilla JS as well as more recent specs like ES6.  I have spent time creating several reusable bits of\n\t\t\t\tcode to extend JS's functionality, including new methods of manipulating callbacks, URL parameters,\n\t\t\t\tobject properties, and more."),new s.default("C#",8,i.LANGUAGE,"I am very comfortable with C# for web applications and architecture.  I am still learning\n\t\t\t\tmore about using C# to develop more complex backend functionality, and to create non-web\n\t\t\t\tapplications."),new s.default("TypeScript",8,i.LANGUAGE,"I have used TypeScript mostly on personal projects, including this website and the Cult Simulator.\n\t\t\t\tTypeScript helps me organize code and enforce consistency across my applications. I find it\n\t\t\t\tespecially useful because it makes it very easy to transition a codebase into C#, for example\n\t\t\t\tif I wanted to move a game from an HTML game to being made in Unity.")],t.Tools=[new s.default("Visual Studio",7,i.TOOL,"I use Visual Studio daily at work because of its ability to manage and build multiple large\n\t\t\t\tenterprise applications.  I am comfortable with its core functionality, but have yet to explore\n\t\t\t\tsome of its deeper features, especially when you combine it with the extended functionality\n\t\t\t\tof ReSharper.")]}(a=e.SkillData||(e.SkillData={})),e.OtherSkills="\n\t\tIn addition to the above skills, I have dabbled in several other frameworks and languages.\n\t\tI attended a RailsBridge event, which gave me a basic understanding of Ruby and Rails. I have\n\t\talso done tutorials and small projects using Electron, React/Redux, Python, Ember, Flask,\n\t\tand Vue.  While I do not have many fully-functioning applications using these skills, I have\n\t\tapplied much of what I learned with them to my other work.  An example of this would be\n\t\ttrying to use Redux's philosophy on immutable data in my Angular projects, even though they\n\t\tdon't use Redux itself.\n\t"},function(t,e){"use strict";e.__esModule=!0;var n=function(){function t(t,e,n,i){this.name=t,this.proficiency=e,this.category=n,this.details=i}return t}();e.default=n},function(t,e){"use strict";function n(t,e){return function(n,i){return n[t]>i[t]?e?1:-1:n[t]<i[t]?e?-1:1:0}}e.__esModule=!0,e.SortByProp=n},function(t,e,n){"use strict";e.__esModule=!0;var i=n(1);n(0);var s=n(12),a=n(4),o=n(5),r=n(3),l=n(6),c=n(8),d=n(7),u=n(11),p=n(9),m=n(10);n(2),e.app="app",i.module(e.app,["ui.router"]).config(s.default).component("header",a.HeaderComponent).component("nav",o.NavComponent).component("footer",r.FooterComponent).component("projects",l.ProjectsComponent).component("resume",c.ResumeComponent).component("resumeItem",d.ResumeItem).component("skills",u.SkillsComponent).component("skillCategoryPanel",p.SkillCategoryPanel).component("skillPanel",m.SkillPanel)}],[36]);