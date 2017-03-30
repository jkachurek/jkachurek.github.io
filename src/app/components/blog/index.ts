import * as angular from 'angular';

import {BlogComponent} from './blog';
import {BlogPost} from './blog-post';

export const Blog: string = 'blog';

angular
	.module(Blog, [])
	.component('blog', BlogComponent)
	.component('blogPost', BlogPost);
