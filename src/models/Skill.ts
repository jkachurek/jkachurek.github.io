export default class Skill {
	constructor(name: string, proficiency: number, category: string, details: string) {
		this.name = name;
		this.proficiency = proficiency;
		this.category = category;
		this.details = details;
	}
	id: number;
	name: string;
	proficiency: number;
	category: string;
	details: string;
}
