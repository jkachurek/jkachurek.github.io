import {GameItem} from '../../../backend/models/Items';

export const BuyTable: angular.IComponentOptions = {
	template: require('./buy-table.html'),
	bindings: {	items: '<' },
	controller: BuyTableController
};

function BuyTableController() {
	const ctrl = this;

	ctrl.sortTable = (criteria: string): void => {
		let sortProperty;
		switch (criteria) {
			case 'name':
			case 'category':
			default:
				sortProperty = criteria;
				break;
		}



		let items = ctrl.items as Array<GameItem>;
		ctrl.items = (ctrl.items as Array<GameItem>).sort((a, b) => {
			if (a[sortProperty] > b[sortProperty]) return 1;
			if (a[sortProperty] < b[sortProperty]) return -1;
			return 0;
		});
	}
}
