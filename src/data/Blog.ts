import {BlogPost} from '../models/Blog';
import {Tags} from './Tags';
import Repository from './Repository';
import {SortByProp, SortObjectPropertiesByValue} from '../util/Extensions';

// All data for blog posts, newest at the top
const BlogDb: Array<BlogPost> = [
	new BlogPost('CultSim, Part 3: "Cost Benefit" Analysis', new Date(2017, 3, 17, 16, 0),
		'static/blogPosts/4-17-17_3.html',
		[Tags.CultSimulator, Tags.TypeScript, Tags.GameDev, Tags.Projects]
	),
	new BlogPost('CultSim, Part 2: Initial Game Logic', new Date(2017, 3, 17, 14, 30),
		'static/blogPosts/4-17-17_2.html',
		[Tags.CultSimulator, Tags.TypeScript, Tags.GameDev, Tags.Projects]
	),
	new BlogPost('CultSim, Part 1: First Steps', new Date(2017, 3, 17, 12, 0),
		'static/blogPosts/4-17-17.html',
		[Tags.CultSimulator, Tags.TypeScript, Tags.GameDev, Tags.Projects]
	),
	new BlogPost('Introduction to "Cult Simulator"', new Date(2017, 3, 10, 13, 0),
		'static/blogPosts/4-10-17.html',
		[Tags.CultSimulator, Tags.TypeScript, Tags.GameDev, Tags.Angular, Tags.Projects]
	),
	new BlogPost('Building the Blog, Part 3: Changing Data Access', new Date(2017, 3, 4, 15, 0),
		'static/blogPosts/4-4-17.html',
		[Tags.WebDev, Tags.Angular, Tags.TypeScript, Tags.Projects, Tags.PersonalWebsite]
	),
	new BlogPost('Building the Blog, Part 2: Dynamically Embedding Images', new Date(2017, 2, 24, 12, 0),
		'static/blogPosts/3-24-17_2.html',
		[Tags.WebDev, Tags.Angular, Tags.TypeScript, Tags.Projects, Tags.PersonalWebsite]
	),
	new BlogPost('Building The Blog, Part 1: Rendering the Body Content', new Date(2017, 2, 24, 10, 0),
		'static/blogPosts/3-24-17_1.html',
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
