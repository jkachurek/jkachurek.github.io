export default class ProjectModel {
	constructor(title: string, date: string, description: string,
							tools: string[] = [], link: string = '', images: string[] = []) {
		this.title = title;
		this.date = date;
		this.description = description;
		this.tools = `Built with ${tools.join(', ')}`;
		this.link = link;
		this.images = images;
	}
	id: number;
	title: string;
	date: string;
	description: string;
	tools: string;
	link: string;
	images: string[];
}
