import {BlogDb, BlogQueries} from './blogData';
import * as Extensions from '../../../util/Extensions';

import './blog.scss';

export const BlogComponent: angular.IComponentOptions = {
	template: require('./blog.html'),
	controller: function($stateParams: angular.ui.IStateParamsService) {
		const ctrl = this;

		ctrl.$onInit = () => {
			this.blogPosts = BlogQueries.GetPostsByTag($stateParams['tag']);
			this.recentPosts = BlogQueries.GetNRecentPosts(3);
		}
	}
};
