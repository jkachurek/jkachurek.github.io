import * as angular from 'angular';

import {App as AppComponent} from './app';
import {BuyItem} from './components/buy-panel/buy-item';
import {BuyPanel} from './components/buy-panel/buy-panel';
import {BuyTable} from './components/buy-panel/buy-table';
import {InventoryComponent} from './components/inventory/inventory';
import {ResourcesComponent} from './components/resources/resources';

export const CultSim: string = 'cultSim';

angular
	.module(CultSim, [])
	.component('cultSim', AppComponent)
	.component('buyPanel', BuyPanel)
	.component('buyTable', BuyTable)
	.component('buyItem', BuyItem)
	.component('resources', ResourcesComponent)
	.component('inventory', InventoryComponent);
