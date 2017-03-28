import {BlogPost} from '../models/Blog';
import {Tags} from './Tags';
import Repository from './Repository';

// All data for blog posts, newest at the top
const BlogDb: Array<BlogPost> = [
	new BlogPost('Building the Blog, Part 2: Dynamically Embedding Images', new Date(2017, 2, 24, 12, 0),
		'static/blogPosts/2-24-17_2.html',
		// [new BlogImage('static/images/blog/3-24-17/imageTest.png')],
		[Tags.WebDev, Tags.Angular, Tags.TypeScript, Tags.Projects, Tags.PersonalWebsite]
	),
	new BlogPost('Building The Blog, Part 1: Rendering the Body Content', new Date(2017, 2, 24, 10, 0),
		'static/blogPosts/2-24-17_1.html',
		// [],
		[Tags.WebDev, Tags.Angular, Tags.TypeScript, Tags.Projects, Tags.PersonalWebsite]
	),

	new BlogPost('test post', new Date(2017, 2, 21), 'static/blogPosts/2-21-17_test.html'),
	new BlogPost('test post', new Date(2017, 2, 19), 'static/blogPosts/2-19-17_test.html')
];
// give all posts IDs
BlogDb.forEach((blog, index) => blog.id = (BlogDb.length - index));

class BlogRepository extends Repository<BlogPost> { }
const BlogRepositoryInstance = new BlogRepository(BlogDb);
export default BlogRepositoryInstance;
