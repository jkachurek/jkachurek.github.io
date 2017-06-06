import {BlogPost as Blog} from '../../../models/Blog';
import BlogRepo from '../../../data/Blog';

export const BlogPost: angular.IComponentOptions = {
	bindings: { post: '<' },
	template: require('./blog-post.html'),
	controller: BlogPostController
};

BlogPostController.$inject = ['$stateParams', '$state'];

function BlogPostController ($stateParams: angular.ui.IStateParamsService, $state: angular.ui.IStateService) {
	const ctrl = this;
	ctrl.$onInit = () => {
		if ($stateParams['id']) {
			ctrl.post = BlogRepo.getById(~~$stateParams['id']);
		}
		if (!ctrl.post) {
			$state.go('blog');
		}
	};
	ctrl.scrollToTop = () => {
		document.querySelector('blog-post').scrollIntoView({behavior: 'smooth', block: 'start'});
	};
}
