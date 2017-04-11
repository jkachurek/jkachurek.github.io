import {BlogPost} from '../../../models/Blog';

export const BlogPostPreview: angular.IComponentOptions = {
	bindings: { post: '<' },
	template: require('./blog-post-preview.html'),
	controller: BlogPostPreviewController
};

BlogPostPreviewController.$inject = ['$state'];

function BlogPostPreviewController($state: angular.ui.IStateService) {
	const ctrl = this;
	ctrl.goToTag = (tag: string) => {
		$state.go('blog', { tag: tag }, { reload: true });
	};
}
