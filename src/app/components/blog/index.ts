import * as angular from 'angular';

import {BlogComponent} from './blog';
import {BlogPost} from './blog-post';
import {BlogPostPreview} from './blog-post-preview';

export const Blog: string = 'blog';

angular
	.module(Blog, [])
	.component('blog', BlogComponent)
	.component('blogPost', BlogPost)
	.component('blogPostPreview', BlogPostPreview);
