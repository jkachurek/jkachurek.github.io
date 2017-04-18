export class BlogPost {
	id: number = 0;
	title: string;
	date: Date;
	bodyTemplate: string;
	tags: string[];
	constructor(title: string, date: Date, bodyTemplate: string, /*images: BlogImage[] = [],*/ tags: string[] = []) {
		this.title = title;
		this.date = date;
		this.bodyTemplate = bodyTemplate;
		this.tags = tags;
	}
	getDisplayDateTime(): string {
		return `${this.date.toLocaleDateString()}, ${this.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`;
	}
}
