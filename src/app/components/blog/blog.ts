import BlogRepo from '../../../data/Blog';

import './blog.scss';

export const BlogComponent: angular.IComponentOptions = {
	template: require('./blog.html'),
	controller: BlogController
};

BlogController.$inject = ['$stateParams'];

function BlogController($stateParams: angular.ui.IStateParamsService) {
	const ctrl = this;

	ctrl.$onInit = () => {
		ctrl.currentTag = $stateParams['tag'];
		ctrl.tags = BlogRepo.getTagData();
		ctrl.blogPosts = $stateParams['tag']
			? (BlogRepo.getByExpression(b => ~b.tags.indexOf($stateParams['tag'])) || BlogRepo.getAll())
			: BlogRepo.getAll();
	};
}
