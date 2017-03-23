export const BlogPost: angular.IComponentOptions = {
	template: require('./blog-post.html'),
	bindings: { post: '<' },
	controller: function($sce: angular.ISCEService) {
		const ctrl = this;
		ctrl.$onInit = () => {
			ctrl.header = ctrl.post.title;
			ctrl.subheader = (ctrl.post.date as Date).toLocaleDateString();
			ctrl.body = $sce.trustAsHtml(ctrl.post.bodyContent);
		};
	}
};
