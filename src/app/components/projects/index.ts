import * as angular from 'angular';
import {ProjectsComponent} from './projects';

export const Projects: string = 'projects';

angular
	.module(Projects, [])
	.component('projects', ProjectsComponent);
