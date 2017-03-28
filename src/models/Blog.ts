export class BlogPost {
	constructor(title: string, date: Date, bodyTemplate: string, /*images: BlogImage[] = [],*/ tags: string[] = []) {
		this.title = title;
		this.date = date;
		this.bodyTemplate = bodyTemplate;
		this.tags = tags;
		// if (images.length) {
		// 	this.images = images;
		// 	// this.bodyContent = this.bodyContent.split(/#{2}img[0-9]*#{2}/, this.images.length + 1)
		// 	// 	.reduce((prev, cur, index) => {
		// 	// 		return prev + cur + ((this.images[index] && this.images[index].render()) || '') ;
		// 	// 	}, '');
		// 	let matches = bodyContent.match(/#{2}img[0-9]*#{2}/g);
		// 	if (!matches) return;
		// 	matches.forEach(match => {
		// 		let img: string = match.substr(5);
		// 		let imgIndex: number = (~~img.slice(0, img.length - 2) - 1);
		// 		if (!this.images[imgIndex]) return;
		// 		this.bodyContent = this.bodyContent
		// 			.replace(match, this.images[imgIndex].render());
		// 	});
		// }
	}
	id: number = 0;
	title: string;
	date: Date;
	bodyTemplate: string;
	tags: string[];
	// images: BlogImage[];
}

// export class BlogImage {
// 	constructor(src: string, attrs?: Object) {
// 		this.src = src;
// 		if(attrs)
// 			this.attrs = attrs;
// 	}
// 	src: string;
// 	attrs: Object = { // default attributes of embedded images
// 		class: 'default-img'
// 	};
// 	render(): string {
// 		let elementPieces = ['<img', `src="${this.src}"`];
// 		for (var prop in this.attrs) {
// 			if (this.attrs.hasOwnProperty(prop)) {
// 				elementPieces.push(`${prop}="${this.attrs[prop]}"`);
// 			}
// 		}
// 		elementPieces.push('>');
// 		return elementPieces.join(' ');
// 	}
// }
