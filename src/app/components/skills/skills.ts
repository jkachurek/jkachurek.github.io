import SkillRepo from '../../../data/Skills';
import {SortByProp} from '../../../util/Extensions';

import './skills.scss';

export const SkillsComponent: angular.IComponentOptions = {
	template: require('./skills.html'),
	controller: function() {
		this.skills = {
			Languages: SkillRepo.getByExpression(i => i.category === 'Languages').sort(SortByProp('proficiency')),
			Frameworks: SkillRepo.getByExpression(i => i.category === 'Frameworks').sort(SortByProp('proficiency')),
			Tools: SkillRepo.getByExpression(i => i.category === 'Tools').sort(SortByProp('proficiency'))
		};
		this.otherSkills = `
			In addition to the above skills, I have dabbled in several other frameworks and languages.
			I attended a RailsBridge event, which gave me a basic understanding of Ruby and Rails. I have
			also done tutorials and small projects using Electron, React/Redux, Python, Ember, Flask,
			and Vue.  While I do not have many fully-functioning applications using these skills, I have
			applied much of what I learned with them to my other work.
		`;
	}
};
