export const BlogPostBody: angular.IComponentOptions = {
	bindings: { template: '<' },
	template: '<div ng-bind-html="$ctrl.template"></div>'
};
