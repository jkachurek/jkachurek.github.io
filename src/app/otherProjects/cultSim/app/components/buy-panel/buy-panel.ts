import {Locations} from '../../../backend/data/Locations';
import {Rituals} from '../../../backend/data/Rituals';
import {Units} from '../../../backend/data/Units';
import {Upgrades} from '../../../backend/data/Upgrades';
import {Database} from '../../../backend/data/Database';
import * as ItemModels from '../../../backend/models/Items';

export const BuyPanel: angular.IComponentOptions = {
	template: require('./buy-panel.html'),
	controller: buyPanelController
};

function buyPanelController() {
	var ctrl = this;

	ctrl.showSection = showSection;

	ctrl.locations = Database.filter(i => i instanceof ItemModels.Location);
	ctrl.rituals = Database.filter(i => i instanceof ItemModels.Ritual);
	ctrl.units = Database.filter(i => i instanceof ItemModels.Unit);
	ctrl.upgrades = Database.filter(i => i instanceof ItemModels.Upgrade);

	ctrl.sections = {
		Locations: false,
		Rituals: false,
		Units: false,
		Upgrades: false
	};

	function showSection(section: string) {
		for (var i in ctrl.sections) {
			if (ctrl.sections.hasOwnProperty(i)) {
				ctrl.sections[i] = (i === section) ? !ctrl.sections[i] : false;
			}
		}
	}
}
