export default class BlogPost {
	constructor(title: string, date: Date, bodyContent: string, images: BlogImage[] = [], tags: string[] = []) {
		this.title = title;
		this.date = date;
		this.bodyContent = bodyContent;
		this.tags = tags;
		if (images.length) {
			this.images = images;
			this.bodyContent = this.bodyContent.split(/#{2}img[0-9]*#{2}/, this.images.length + 1)
				.reduce((prev, cur, index) => {
					return prev + cur + ((this.images[index] && this.images[index].render()) || '') ;
				}, '');
		}
	}
	title: string;
	date: Date;
	bodyContent: string;
	tags: string[];
	images: BlogImage[];
}

export class BlogImage {
	constructor(src: string, options?: any) {
		this.src = src;
		this.options = options;
	}
	src: string;
	options: ImageOptions;
	render(): string {
		let elementPieces = ['<img', `src="${this.src}"`];
		for (var prop in this.options) {
			if (this.options.hasOwnProperty(prop)) {
				elementPieces.push(`${prop}="${this.options[prop]}"`);
			}
		}
		elementPieces.push('>');
		return elementPieces.join(' ');
	}
}

class ImageOptions {
	height: number;
	width: number;
	class: string;
	style: string;
}
