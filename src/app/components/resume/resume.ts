import ResumeRepo from '../../../data/Resume';
import Experience from '../../../models/Experience';

import './resume.scss';

export const ResumeComponent: angular.IComponentOptions = {
	template: require('./resume.html'),
	controller: ResumeController
};

function ResumeController() {
	const ctrl = this;
	ctrl.$onInit = () => {
		ctrl.sections = [
				new ResumeSection('Work', 'static/images/briefcase.svg', ResumeRepo.getByExpression(i => i.category === 'work')),
				new ResumeSection('Engagement', 'static/images/bullhorn.svg', ResumeRepo.getByExpression(i => i.category === 'engagement')),
				new ResumeSection('Education', 'static/images/mortarboard.svg', ResumeRepo.getByExpression(i => i.category === 'education'))
			];
		ctrl.activeSection = ctrl.sections[0];
	};
}

class ResumeSection {
	constructor(name: string, img: string, contents: Array<Experience>) {
		this.name = name;
		this.img = img;
		this.contents = contents;
	}
	name: string;
	img: string;
	contents: Array<Experience>;
}
