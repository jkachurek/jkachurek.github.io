export const GameSettings = {
	// percentage increase of costs after each successive purchase
	costIncreaseFactor: 1.2,
	// how often does the game update?
	tick: 82,
	// base value of a button click?
	clickAmount: 1,
	// how much does influence affect costs?
	influenceFactor: 1.0001, // cost * (Math.pow(GameSettings.influenceFactor, Math.floor(PlayerData.resources['influence'])))
	// how much does other alignment decrease when buying a new item of a specific alignment?
	alignmentDecreaseFactor: 0.2
};
