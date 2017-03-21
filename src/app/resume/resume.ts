import {ResumeData} from './resumeData';
import Experience from './experience';

import './resume.scss';

export const ResumeComponent: angular.IComponentOptions = {
	template: require('./resume.html'),
	controller: ResumeController
};

function ResumeController() {
	const ctrl = this;
	ctrl.$onInit = () => {
		ctrl.sections = [
				new ResumeSection('Work', 'static/images/briefcase.svg', ResumeData.Work),
				new ResumeSection('Education', 'static/images/mortarboard.svg', ResumeData.Education),
				new ResumeSection('Engagement', 'static/images/bullhorn.svg', ResumeData.Engagement)
			];
	}
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
