import BlogRepo from '../../../data/Blog';

import './blog.scss';

export const BlogComponent: angular.IComponentOptions = {
	template: require('./blog.html'),
	controller: BlogController
};

BlogController.$inject = ['$stateParams'];

function BlogController($stateParams: angular.ui.IStateParamsService) {
	const ctrl = this;

	const blogsPerPage: number = 5;
	ctrl.pages = [];

	ctrl.$onInit = () => {
		ctrl.currentTag = $stateParams['tag'];
		ctrl.tags = BlogRepo.getTagData();
		ctrl.blogPosts = $stateParams['tag']
			? (BlogRepo.getByExpression(b => ~b.tags.indexOf($stateParams['tag'])) || BlogRepo.getAll())
			: BlogRepo.getAll();
		for (let i = 0; i < Math.ceil(ctrl.blogPosts.length / blogsPerPage); i++) {
			ctrl.pages.push(ctrl.blogPosts.slice(i * blogsPerPage, (i * blogsPerPage) + blogsPerPage));
		}
		ctrl.goToPage(0);
	};
	ctrl.goToPage = (pageNumber: number): void => {
		if (!ctrl.pages[pageNumber]) return;
		ctrl.currentPageNumber = pageNumber;
		ctrl.currentPage = ctrl.pages[pageNumber];
	};
}
