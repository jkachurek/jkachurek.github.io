export default class Experience {
	constructor(location: string, position: string, dates: string, bullets: string[]) {
		this.location = location;
		this.position = position;
		this.dates = dates;
		this.header = [location, position, dates].join('\n');
		this.bullets = bullets;
	}
	location: string;
	position: string;
	dates: string;
	header: string;
	bullets: Array<string>;
}
