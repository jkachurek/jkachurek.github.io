import {BlogPost} from '../models/Blog';
import {Tags} from './Tags';
import Repository from './Repository';
import {SortByProp, SortObjectPropertiesByValue} from '../util/Extensions';

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
	)
];
// give all posts IDs
BlogDb.forEach((blog, index) => blog.id = (BlogDb.length - index));

class BlogRepository extends Repository<BlogPost> {
	getRecentPosts(n: number): Array<BlogPost> {
		return BlogDb.sort(SortByProp('date')).slice(0, n);
	}
	getTagData(): any {
		const tagTotals = BlogDb.reduce((total: Object, curr: BlogPost): Object => {
			let newTotal = total;
			curr.tags.forEach(t => newTotal.hasOwnProperty(t) ? newTotal[t]++ : newTotal[t] = 1);
			return newTotal;
		}, {});
		return SortObjectPropertiesByValue(tagTotals);
	}
}
const BlogRepositoryInstance = new BlogRepository(BlogDb);
export default BlogRepositoryInstance;
