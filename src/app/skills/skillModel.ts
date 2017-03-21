export default class SkillModel {
	constructor(name: string, proficiency: number, category: string, details: string) {
		this.name = name;
		this.proficiency = proficiency;
		this.category = category;
		this.details = details;
	}
	name: string;
	proficiency: number;
	category: string;
	details: string;
}
