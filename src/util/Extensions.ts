/**
 * Returns a compare function to sort an array by a given property
 * @export
 * @param {string} prop Name of the property by which to sort the array
 * @param {boolean} [reverse] Should results be reversed? Defaults to false
 * @returns {(a: any, b: any) => number} Compare function
 */
export function SortByProp(prop: string, reverse?: boolean): (a: any, b: any) => number {
	return function(a: any, b: any): number {
		if (a[prop] > b[prop]) return reverse ? 1 : -1;
		if (a[prop] < b[prop]) return reverse ? -1 : 1;
		return 0;
	};
}
export function SortObjectPropertiesByValue(obj: Object): Array<any> {
	let sortable = [];
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			sortable.push({key: prop, value: obj[prop]});
		}
	}
	return sortable;
}
