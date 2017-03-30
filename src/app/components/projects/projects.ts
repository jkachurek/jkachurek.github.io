import ProjectRepo from '../../../data/Projects';
import './projects.scss';

export const ProjectsComponent: angular.IComponentOptions = {
	template: require('./projects.html'),
	controller: ProjectsController
};

function ProjectsController() {
	this.projects = ProjectRepo.getAll();
}
