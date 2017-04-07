import {PlayerData} from './constants/PlayerData';
import {Resources} from './constants/Names';
import {GameSettings} from './constants/GameSettings';
import {CheckAllItemsAffordability, CheckAllItemsUnlocked, GetItemByName} from './util/DataQueries';
import {GameItem, Unit} from './models/Items';
import {Recruiter, Tickable} from './models/Benefits';
import {Numbers, RNG, Objects} from './util/Extensions';

export class Game {
	constructor () {
		CheckAllItemsUnlocked();
	}

	Update(): void {
		PlayerData.inventory.forEach(item => {
			item.tick();
		});
		CheckAllItemsUnlocked();
	}
	FixedUpdate(): void {
		PlayerData.inventory.forEach(item => {
			item.tickables.forEach(benefit => {
				// recruit units at fixed update
				if (benefit instanceof Recruiter)
					benefit.tick(item.amountOwned);
			});

		});
	}

	Click(resourceType: string): void {
		PlayerData.resources[Resources[resourceType]] += GameSettings.clickAmount;
		CheckAllItemsAffordability();
	}
}
