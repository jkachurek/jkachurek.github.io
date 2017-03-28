import {BlogPost as Blog} from '../../../models/Blog';

export const BlogPost: angular.IComponentOptions = {
	bindings: { post: '<' },
	template: require('./blog-post.html'),
	controller: function($state: angular.ui.IStateService, $sce: angular.ISCEService) {
		const ctrl = this;
		ctrl.$onInit = () => {
			let post = ctrl.post as Blog;
			ctrl.header = post.title;
			ctrl.subheader = post.date.toLocaleDateString();
			ctrl.body = post.bodyTemplate;
			ctrl.tags = post.tags;
		};
		ctrl.goToTag = (tag: string) => {
			$state.go('blog', { tag: tag });
			// filter blog posts to show only posts with this tag
		};
	}
};
// TODO: find way to display shorter version of a blog post when viewing the main blog page,
//       then prompting visitors to click the full post.  Also pagination.
