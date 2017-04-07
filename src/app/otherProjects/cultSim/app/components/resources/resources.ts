import {PlayerData} from '../../../backend/constants/PlayerData';
import {Resources as ResourceTypes} from '../../../backend/constants/Names';
import {Objects} from '../../../backend/util/Extensions';

export const ResourcesComponent: angular.IComponentOptions = {
	template: require('./resources.html'),
	controller: ResourcesController
};

function ResourcesController() {
	var ctrl = this;
	ctrl.stats = PlayerData;
	ctrl.resourceTypes = Objects.CapitalizePropertyNames(ResourceTypes);
}
