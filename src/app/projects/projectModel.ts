export default class ProjectModel {
	constructor(title: string, date: string, description: string, link: string, images: string[]) {
		this.title = title;
		this.description = description;
		this.link = link;
		this.images = images;
	}
	title: string;
	date: string;
	description: string;
	link: string;
	images: string[];
}
