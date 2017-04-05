export class BlogPost {
	constructor(title: string, date: Date, bodyTemplate: string, /*images: BlogImage[] = [],*/ tags: string[] = []) {
		this.title = title;
		this.date = date;
		this.bodyTemplate = bodyTemplate;
		this.tags = tags;
	}
	id: number = 0;
	title: string;
	date: Date;
	bodyTemplate: string;
	tags: string[];
}
