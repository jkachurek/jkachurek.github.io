import * as angular from 'angular';
import {Projects} from './projects/index';
import {Resume} from './resume/index';
import {Skills} from './skills/index';

export const Components: string = 'components';

angular
	.module(Components, [
		Projects,
		Resume,
		Skills
	]);
