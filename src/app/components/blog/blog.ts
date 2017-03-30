import {SortByProp} from '../../../util/Extensions';
import {Routes} from '../../../routes';
import BlogRepo from '../../../data/Blog';

import './blog.scss';

export const BlogComponent: angular.IComponentOptions = {
	template: require('./blog.html'),
	controller: function($state: angular.ui.IStateService, $stateParams: angular.ui.IStateParamsService) {
		const ctrl = this;

		ctrl.$onInit = () => {
			this.tags = BlogRepo.getTagData();
			this.blogPosts = $stateParams['tag']
				? (BlogRepo.getByExpression(b => ~b.tags.indexOf($stateParams['tag'])) || BlogRepo.getAll())
				: BlogRepo.getAll();
			this.recentPosts = BlogRepo.getAll().sort(SortByProp('date')).slice(0, 3);
		};

		ctrl.goToPost = (id: number) => {
			$state.go(Routes.BlogPost.toLowerCase(), {id: id});
		};
	}
};
