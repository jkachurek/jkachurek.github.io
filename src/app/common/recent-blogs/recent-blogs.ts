import {SortByProp} from '../../../util/Extensions';
import {Routes} from '../../../routes';
import BlogRepo from '../../../data/Blog';

import './recent-blogs.scss';

export const RecentBlogs: angular.IComponentOptions = {
	template: require('./recent-blogs.html'),
	controller: function() {
		const ctrl = this;
		ctrl.$onInit = () => {
			ctrl.posts = BlogRepo.getRecentPosts(3);
		};
	}
};
