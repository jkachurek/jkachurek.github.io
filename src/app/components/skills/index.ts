import * as angular from 'angular';
import {SkillsComponent} from './skills';
import {SkillPanel} from './skill-panel';
import {SkillCategoryPanel} from './skill-category-panel';

export const Skills: string = 'skills';

angular
	.module(Skills, [])
	.component('skills', SkillsComponent)
	.component('skillPanel', SkillPanel)
	.component('skillCategoryPanel', SkillCategoryPanel);
