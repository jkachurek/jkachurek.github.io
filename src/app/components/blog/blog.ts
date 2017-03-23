import {BlogDb} from './blogData';
import BlogPost from './BlogPost';
import * as Extensions from '../../../util/Extensions';

export const BlogComponent: angular.IComponentOptions = {
	template: require('./blog.html'),
	controller: function() {
		this.blogPosts = BlogDb;
		this.recentPosts = BlogDb
			.sort(Extensions.SortByProp('date'))
			.slice(0, 3);
	}
};
