import * as angular from 'angular';
import {ResumeComponent} from './resume';
import {ResumeItem} from './resume-item';

export const Resume: string = 'resume';

angular
	.module(Resume, [])
	.component('resume', ResumeComponent)
	.component('resumeItem', ResumeItem);
