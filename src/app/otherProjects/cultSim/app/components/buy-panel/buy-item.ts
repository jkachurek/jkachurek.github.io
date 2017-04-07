import {PlayerData} from '../../../backend/constants/PlayerData';
import {GameItem, Ritual} from '../../../backend/models/Items';
import {ICost, Cost, UnitCost} from '../../../backend/models/Costs';
import * as Benefits from '../../../backend/models/Benefits';
import {CheckAllItemsAffordability} from '../../../backend/util/DataQueries';
import {Numbers, Strings} from '../../../backend/util/Extensions';

export const BuyItem: angular.IComponentOptions = {
	template: require('./buy-item.html'),
	bindings: { item: '<' },
	controller: BuyItemController
};

BuyItemController.$inject = ['$scope'];

function BuyItemController($scope: angular.IScope) {
	const ctrl = this;
	ctrl.$onInit = () => {
		ctrl.vm = new ItemVM(ctrl.item);
	}
	ctrl.buy = () => {
		(ctrl.item as GameItem).buy();
		ctrl.vm = new ItemVM(ctrl.item); // update vm for increased cost
		if (ctrl.item instanceof Ritual) {
			ctrl.timer = Numbers.MillisecondToSecond((ctrl.item as Ritual).duration);
			ctrl.timerInterval = setInterval(() => {
				ctrl.timer--;
				if (ctrl.timer === 0) clearInterval(ctrl.timerInterval);
			}, 1000);
		}
		CheckAllItemsAffordability();
	};
	$scope.$on('tick', () => {
		ctrl.vm = new ItemVM(ctrl.item);
	});
}


class ItemVM {
	constructor (item: GameItem) {
		this.name = item.name;
		this.description = item.description;
		this.costs = item.cost.map(GetCostString);
		this.benefits = item.benefits.map(GetBenefitString);
		this.header = item.amountOwned > 0 ?
			` | Owned: ${item.amountOwned}` : '';
		this.header +=	` | Costs: ${item.cost.map(GetCostString).join(', ')}`;
		if (item instanceof Ritual) {
			this.benefits.unshift(`Lasts ${item.duration / 1000} seconds`);
		}
	}
	name: string;
	description: string;
	costs: string[] = [];
	benefits: string[] = [];
	header: string;
}

function GetBenefitString(ben: Benefits.IBenefit) {
	if (ben instanceof Benefits.ResourceConstant) {
		return `+${ben.amount} ${ben.type}`;
	} else if (ben instanceof Benefits.Generator) {
		return `+${ben.amount} ${ben.type} / sec`;
	} else if (ben instanceof Benefits.Multiplier) {
		return `x${Numbers.RoundToPrecision(ben.amount, 2).toLocaleString()} ${ben.type}`;
	}	else if (ben instanceof Benefits.Recruiter) {
		return `${Numbers.RoundToPrecision(ben.amount, 2).toLocaleString()}% chance to recruit one ${ben.type}`;
	} else if (ben instanceof Benefits.CategoryMultiplier) {
		return `x${Numbers.RoundToPrecision(ben.amount, 2).toLocaleString()} productivity for ${ben.type} items`;
	}
}

function GetCostString(cost: ICost) {
	let s = `${cost.amount.toLocaleString()} ${cost.type}`;
	if (cost instanceof UnitCost && cost.amount > 1) {
		return Strings.Pluralize(s);
	} else return s;
}
