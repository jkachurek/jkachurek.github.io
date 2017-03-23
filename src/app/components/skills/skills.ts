import {SkillData, OtherSkills} from './skillData';
import SkillModel from './skillModel';
import * as Extensions from '../../../util/Extensions';

import './skills.scss';

export const SkillsComponent: angular.IComponentOptions = {
	template: require('./skills.html'),
	controller: function() {
		this.skills = SkillData;
		this.otherSkills = OtherSkills;
		for (var cat in this.skills) {
			if (this.skills.hasOwnProperty(cat)) {
				(this.skills[cat] as Array<SkillModel>)
					.sort(Extensions.SortByProp('proficiency'));
			}
		}
	}
};
