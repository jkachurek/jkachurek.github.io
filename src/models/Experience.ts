export default class Experience {
	constructor(category: string, location: string, position: string, dates: string, bullets: string[]) {
		this.category = category;
		this.location = location;
		this.position = position;
		this.dates = dates;
		this.header = [location, position, dates].join('\n');
		this.bullets = bullets;
	}
	id: number = 0;
	category: string;
	location: string;
	position: string;
	dates: string;
	header: string;
	bullets: Array<string>;
}
