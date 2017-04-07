/**
 * Base class that ties together a name and an amount.
 * @export
 * @class ResourceUsage
 */
export class ResourceUsage {
	/**
	 * Creates an instance of ResourceUsage.
	 * @param {string} type The type of resource/item/etc
	 * @param {number} amount The amount/number
	 * @memberOf ResourceUsage
	 */
	constructor(type: string, amount: number) {
		this.type = type;
		this.amount = amount;
	}
	type: string;
	amount: number;
}
