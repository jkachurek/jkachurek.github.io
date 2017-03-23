import * as angular from 'angular';
import 'angular-ui-router';

import routesConfig from './routes';

import {AppComponent} from './app/app';

import {HeaderComponent} from './app/header/header';
import {NavComponent} from './app/nav/nav';
import {FooterComponent} from './app/footer/footer';

import {ProjectsComponent} from './app/projects/projects';

import {ResumeComponent} from './app/resume/resume';
import {ResumeItem} from './app/resume/resume-item';

import {SkillsComponent} from './app/skills/skills';
import {SkillCategoryPanel} from './app/skills/skill-category-panel';
import {SkillPanel} from './app/skills/skill-panel';

import './index.scss';

export const app: string = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', AppComponent)
  .component('header', HeaderComponent)
  .component('nav', NavComponent)
  .component('footer', FooterComponent)
  .component('projects', ProjectsComponent)
  .component('resume', ResumeComponent)
  .component('resumeItem', ResumeItem)
  .component('skills', SkillsComponent)
  .component('skillCategoryPanel', SkillCategoryPanel)
  .component('skillPanel', SkillPanel);
