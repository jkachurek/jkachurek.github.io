import {BlogPost as Blog} from '../../../models/Blog';
import BlogRepo from '../../../data/Blog';

export const BlogPost: angular.IComponentOptions = {
	bindings: { post: '<' },
	template: require('./blog-post.html'),
	controller: BlogPostController
};

BlogPostController.$inject = ['$stateParams'];

function BlogPostController ($stateParams: angular.ui.IStateParamsService) {
		const ctrl = this;
		ctrl.$onInit = () => {
			if ($stateParams['id']) {
				ctrl.post = BlogRepo.getById(~~$stateParams['id']);
			}
			let post = ctrl.post as Blog;
			ctrl.header = post.title;
			ctrl.subheader = post.date.toLocaleDateString();
			ctrl.body = post.bodyTemplate;
			ctrl.tags = post.tags;
		};
		ctrl.scrollToTop = () => {
			document.querySelector('blog-post').scrollIntoView({behavior: 'smooth', block: 'start'});
		};
	}
