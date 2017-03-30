import * as angular from 'angular';
import {Blog} from './blog/index';
import {Projects} from './projects/index';
import {Resume} from './resume/index';
import {Skills} from './skills/index';

export const Components: string = 'components';

angular
	.module(Components, [
		Blog,
		Projects,
		Resume,
		Skills
	]);
