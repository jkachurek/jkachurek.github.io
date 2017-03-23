import * as angular from 'angular';
import {HeaderComponent} from './header/header';
import {NavComponent} from './nav/nav';
import {FooterComponent} from './footer/footer';

export const Common: string = 'common';

angular
	.module(Common, [])
	.component('header', HeaderComponent)
	.component('nav', NavComponent)
	.component('footer', FooterComponent);
