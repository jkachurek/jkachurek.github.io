import BlogRepo from '../../../data/Blog';

import './blog.scss';

export const BlogComponent: angular.IComponentOptions = {
	template: require('./blog.html'),
	controller: function() {
		const ctrl = this;

		ctrl.$onInit = () => {
			this.tags = BlogRepo.getTagData();
			// this.blogPosts = $stateParams['tag']
			// 	? (BlogRepo.getByExpression(b => ~b.tags.indexOf($stateParams['tag'])) || BlogRepo.getAll())
			// 	: BlogRepo.getAll();
			this.blogPosts = BlogRepo.getAll();
		};
	}
};
