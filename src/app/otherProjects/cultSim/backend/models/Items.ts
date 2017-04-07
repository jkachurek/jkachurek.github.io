import {PlayerData} from './../constants/PlayerData';
import {ICost} from './Costs';
import {UnlockInfo} from './Unlocks';
import {Alignment} from './Alignment';
import {GetItemByName} from './../util/DataQueries';
import {Objects, SetIntervalForDuration} from '../util/Extensions';
import {ResourceUsage} from './ResourceUsage';
import {IBenefit, Tickable, Multiplier, Generator, Recruiter, ResourceConstant} from './Benefits';

/**
 * The base class for all purchasable items in the game.
 * 
 * @export
 * @class GameItem
 */
export abstract class GameItem {
	/**
	 * Creates an instance of GameItem.
	 * @param {string} name Name of the game item
	 * @param {string} description Description of the item
	 * @param {string} category The item's category
	 * @param {Array<ICost>} cost Collection of ICost objects
	 * @param {Array<IBenefit>} benefits Collection of the item's benefits
	 * @param {UnlockInfo} [unlockInfo] Info about what is required to unlock the item, and what it helps unlock.  Defaults to empty.
	 * @param {Alignment} [alignment] The alignment of the item
	 * 
	 * @memberOf GameItem
	 */
	constructor (name: string, description: string, category: string, cost: ICost[], benefits: IBenefit[],
							 unlockInfo: UnlockInfo = new UnlockInfo([], []), alignment: Alignment = null) {
		this.name = name;
		this.description = description;
		this.category = category;
		this.cost = cost;
		this.benefits = benefits;
		this.alignment = alignment;
		this.unlockInfo = unlockInfo;
		this.value = this.calculateValue();
		benefits.forEach(benefit => {
			if (Objects.TypeGuard<Tickable>(benefit, 'tick'))
				this.tickables.push(benefit);
			else
				this.staticBenefits.push(benefit);
		});
	}
	name: string;
	description: string;
	category: string;
	/**
	 * The # of the item owned by the player.
	 * @type {number}
	 * @memberOf GameItem
	 */
	amountOwned: number = 0;
	cost: ICost[];
	benefits: IBenefit[] = [];
	/**
	 * Array of benefits that trigger on tick
	 * 
	 * @type {Tickable[]}
	 * @memberOf GameItem
	 */
	tickables: Tickable[] = [];
	/**
	 * Array of benefits that only activate when purchased or removed (non-tickables)
	 * @type {IBenefit[]}
	 * @memberOf GameItem
	 */
	staticBenefits: IBenefit[] = [];
	/**
	 * Are all of the costs affordable for this item?
	 * @type {boolean}
	 * @memberOf GameItem
	 */
	isAffordable: boolean;
	/**
	 * An approximate value of the item based on costs & benefits
	 * @type {number}
	 * @memberOf GameItem
	 */
	value: number = 0;
	/**
	 * Is the item unlocked?
	 * @type {boolean}
	 * @memberOf GameItem
	 */
	isUnlocked: boolean = false;
	unlockInfo: UnlockInfo;
	alignment: Alignment;
	/**
	 * Multiplies the effect of the item's benefits
	 * 
	 * @type {number}
	 * @memberOf GameItem
	 */
	multiplier: number = 1;
	/**
	 * Calculates the value property of the game item
	 * @private
	 * @returns {number} the value of the item
	 * @memberOf GameItem
	 */
	private calculateValue(): number {
		let totalCostAmt = this.cost.reduce((total: number, thisCost: ICost) => {
			return total + thisCost.amount;
		}, 0);

		let totalGainsAmt = this.benefits
			.filter(benefit => { return benefit instanceof ResourceConstant || benefit instanceof Generator; })
			.reduce((total: number, thisBen: IBenefit) => {
				return total + thisBen.amount;
			}, 0);
		let totalMultiplierAmt = this.benefits
			.filter(benefit => { return benefit instanceof Multiplier; })
			.reduce((total: number, thisBen: IBenefit) => {
				if (thisBen instanceof Multiplier) return total + thisBen.amount;
				return total;
			}, 0);
		return (totalCostAmt + totalGainsAmt) * totalMultiplierAmt;
	}
	/**
	 * If item is affordable, it spends the resources, adds the benefits/alignment, and adds it to the inventory
	 * @memberOf GameItem
	 */
	buy(): void {
		this.isAffordable = this.cost.reduce((aff, c) => {return aff && c.isAffordable()}, true);
		if (this.isAffordable){
			this.cost.forEach(c => c.spend());
			this.benefits.forEach(b => b.add());
			if (this.alignment) this.alignment.add();
			this.addToInventory();
		}
	}
	/**
	 * Increments the item's amountOwned
	 * @memberOf GameItem
	 */
	addToInventory(): void {
		this.amountOwned++;
		this.checkUnlockInfo();
	}
	/**
	 * Decrements the item's amountOwned, removes benefits
	 * @memberOf GameItem
	 */
	removeFromInventory(): void {
		this.amountOwned--;
		this.benefits.forEach(b => b.remove());
		this.checkUnlockInfo();
	}
	/**
	 * Checks items that this item helps to unlock, then double checks if this item is unlocked
	 * @memberOf GameItem
	 */
	checkUnlockInfo(): void {
		this.unlockInfo.requiredToUnlock.forEach(req => {
			let item = GetItemByName<GameItem>(req);
			if (item.isUnlocked) return; // prevents item from re-locking
			item.isUnlocked = item.unlockInfo ? item.unlockInfo.checkAllRequirements() : true;
		});
	}
	/**
	 * Runs the item's tickable benefits with its proper multiplier.
	 * @memberOf GameItem
	 */
	tick(): void {
		let multiplier = this.amountOwned * this.multiplier;
		// if there is a category-wide multiplier, apply it
		if (PlayerData.multipliers.hasOwnProperty(this.category) && PlayerData.multipliers[this.category] >= 1)
			multiplier *= PlayerData.multipliers[this.category];
		this.tickables.forEach(benefit =>	{ // don't recruit every tick
			if (!(benefit instanceof Recruiter)) benefit.tick(multiplier)
		});
	}
}
/**
 * A temporary benefit. Only one of each can be active at a time.
 * 
 * @export
 * @class Ritual
 * @extends {GameItem}
 */
export class Ritual extends GameItem {
	/**
	 * Creates an instance of Ritual.
	 * @param {string} name Name of the ritual
	 * @param {string} description Description/flavor text of the ritual
	 * @param {string} category Category of the ritual
	 * @param {Array<ICost>} cost Collection of ICosts
	 * @param {Array<IBenefit>} benefits Collection IBenefits
	 * @param {number} duration Duration in seconds (not ms)
	 * @param {Alignment} [alignment] 
	 * @param {UnlockInfo} [unlockInfo] 
	 * 
	 * @memberOf Ritual
	 */
	constructor(name: string, description: string, category: string, cost: ICost[], benefits: IBenefit[],
							duration: number, alignment?: Alignment, unlockInfo?: UnlockInfo) {
		super(name, description, category, cost, benefits, unlockInfo, alignment);
		this.duration = duration * 1000;
	}
	duration: number; // duration in milliseconds
	/**
	 * Determines whether or not the item can be bought/the button is enabled in the UI
	 * @type {boolean}
	 * @memberOf Ritual
	 */
	canPurchase: boolean = true;

	buy(): void {
		super.buy();
		if (!this.isAffordable) return;
		SetIntervalForDuration(
			this.duration,
			this.tick,
			() => this.canPurchase = false,
			() => this.canPurchase = true
		);
	}
}
/**
 * The people that the organization accumulates.
 * @export
 * @class Unit
 * @extends {GameItem}
 */
export class Unit extends GameItem {
	buy(): void {
		super.buy();
		if (!this.isAffordable) return;
		if (!PlayerData.inventory.find(i => i.name === this.name))
			PlayerData.inventory.push(this);
		this.cost.forEach(c => c.increaseByFactor());
	}
}
/**
 * Functionally identical to Unit; represents a purchasable location
 * @export
 * @class Location
 * @extends {GameItem}
 */
export class Location extends GameItem {
	buy(): void {
		super.buy();
		if (!this.isAffordable) return;
		if (!PlayerData.inventory.find(i => i.name === this.name))
			PlayerData.inventory.push(this);
		this.cost.forEach(c => c.increaseByFactor());
	}
}
/**
 * Single-time purchases that yield constant buffs.
 * @export
 * @class Upgrade
 * @extends {GameItem}
 */
export class Upgrade extends GameItem {
	/**
	 * Is the upgrade owned yet? Determines whether or not to let people buy it.
	 * @type {boolean}
	 * @memberOf Upgrade
	 */
	isOwned: boolean = false;
	buy(): void {
		super.buy();
		if (this.isAffordable) {
			this.isOwned = true;
			this.addToInventory();
		}
	}
}
