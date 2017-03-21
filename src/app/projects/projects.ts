import {ProjectData} from './projectData';
import './projects.scss';

export const ProjectsComponent: angular.IComponentOptions = {
	template: require('./projects.html'),
	controller: ProjectsController
};

function ProjectsController() {
	this.projects = ProjectData;
}
