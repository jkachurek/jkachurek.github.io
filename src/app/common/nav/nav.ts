import './nav.scss';

export const NavComponent: angular.IComponentOptions = {
	template: require('./nav.html'),
	controller: NavController
}

function NavController() {
	const ctrl = this;

	ctrl.icons = [
		new NavIcon('https://github.com/jkachurek', 'static/images/github-logo.svg'),
		new NavIcon('https://www.linkedin.com/in/john-kachurek', 'static/images/linkedin-logo.svg'),
		new NavIcon('http://stackoverflow.com/users/6599088/jkachurek','static/images/stackoverflow.svg'),
		new NavIcon('mailto:john.kachurek@gmail.com', 'static/images/close-envelope.svg')
	];

	ctrl.navLinks = ['Skills', 'Resume', 'Projects'];
}

class NavIcon {
	constructor(link: string, img: string) {
		this.link = link;
		this.img = img;
	}
	link: string;
	img: string;
}
