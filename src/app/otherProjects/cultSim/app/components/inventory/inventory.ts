import {PlayerData} from '../../../backend/constants/PlayerData';

export const InventoryComponent: angular.IComponentOptions = {
	template: require('./inventory.html'),
	controller: InventoryController
};

function InventoryController() {
	var ctrl = this;
	ctrl.inventory = PlayerData.inventory;
	ctrl.recruiters = PlayerData.recruiters;
}
