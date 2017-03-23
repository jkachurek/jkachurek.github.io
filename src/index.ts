import * as angular from 'angular';
import 'angular-ui-router';

import {Common} from './app/common/index';
import {Components} from './app/components/index';

import routesConfig from './routes';
import {AppComponent} from './app/app';

import './index.scss';

export const app: string = 'app';

angular
  .module(app, [
    'ui.router',
    Common,
    Components
  ])
  .config(routesConfig)
  .component('app', AppComponent);
