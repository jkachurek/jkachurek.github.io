import {BlogPost, BlogImage} from './blogModels';
import {Tags} from './tagDb';
import * as Extensions from '../../../util/Extensions';

export const BlogDb: Array<BlogPost> = [
	new BlogPost('Building the Blog, Part 2: Dynamically Embedding Images', new Date(2017, 2, 24, 12, 0),
		`
<p>
	If you didn't read the first post in my series about developing this blog section of
	my site, check it out below.  After figuring out how to render the body content in general,
	my focus went to figuring out how to dynamically render embedded images.  Since the body
	content <em>is</em> technically raw html, I could theoretically hard code the images.  But
	for the sake of making it easier to find and style images, I wanted to render them from a 
	separate array of image sources.
</p>
<p>
	My first move was to add an array of image source strings to the <code>BlogPost</code>
	object.  I quickly realized that this would prevent me from styling images on a
	case-by-case basis, so I created the <code>BlogImage</code> object.  All this object
	does is render an image given a source and an object containing its other HTML
	attributes.  This object allows me to have complete control over image display within
	blog posts without hard-coding the images.
</p>
<p>
	The next dilemma was figuring out how to parse through the body content and insert
	these images if I am not using HTML for it.  I devised an identifier for images,
	<code>##img[number]##</code>, where <code>[number]</code> is the index of the image
	to be embedded.  I then came up with two methods for replacing these identifiers.
	I liked the first method for its brevity, but I wound up using the second method for
	its clarity.  I plan to benchmark them in the near future to see which one is
	technically more efficient.  Even though I won't be using enough pictures ever to
	noticeably slow things down, I would like to make sure things run as quickly as they can.
</p>
<p>
	The first, shorter method I tried was the following:
</p>
<pre>
this.bodyContent = this.bodyContent
  .split(/#{2}img[0-9]*#{2}/, this.images.length + 1)
  .reduce((prev, cur, index) => {
    return prev + cur + ((this.images[index] && this.images[index].render()) || '') ;
  }, '');
</pre>
		`,
		[new BlogImage('static/images/blog/3-24-17/imageTest.png')],
		[Tags.WebDev, Tags.Angular, Tags.TypeScript, Tags.Projects, Tags.PersonalWebsite]
	),
	new BlogPost('Building The Blog, Part 1: Rendering the Body Content', new Date(2017, 2, 24, 10, 0),
		`
			<p>
				This is my first post on the blog section of my page!  Rather than using existing tools
				or libraries like Jekyll to create a blog on a site hosted by GitHub Pages, I decided GitHub
				would be an interesting challenge to do it using the same system I have for the rest of my site:
				TypeScript and Angular 1.  As you can see in the <a href="https://github.com/jkachurek/jkachurek.github.io">
				source code</a> for this website, most of the data rendered on the pages is stored in data files in each
				component folder.  While I would store the data in a different place for a larger application that
				requires more security, for a static website, this solution works just fine.
			</p>
			<p>
				My first concern when I considered building a blog page was how to render HTML directly to the page.
				This is not something you would typically do on a regular site with a backend that can securely render
				HTML forr you, since it can present severe security risks.  My first instinct to avoid this pitfall was
				to store the body content of each blog post as a separate HTML template, then render those dynamically
				using ng-include to reference the template's location.  Because I wanted to keep everything in the same
				place, I decided to instead just type the HTML of the body directly into the blog post models as
				properties, which would then be rendered.  Initially, I also thought about simply storing the blog
				content as an array of paragraphs, which would be rendered through an <code>ng-repeat</code>, but then
				realized that would prevent me from having anything	<em>other</em> than text in my blog posts.  
			</p>
			<p>
				For now, I have landed on using Angular's <code>$sce</code> (strict contextual escaping) service to
				indicate that the HTML being loaded is trustworthy, since my site does not contain any user input or
				private information.  Though this is not my ideal solution, it works for the time being.  In the future,
				I plan to explore a few different things for this.  First, I might just migrate to storing body
				content in separate .html files anyway, for the sake of ease of writing.  Second, I might try to see
				if it is possible to return the template from a function when declaring the component.  Finally,
				someday, I might even move this thing into another framework, like Angular 2 or React.  I know for a
				fact that the latter would almost completely solve this problem.
			</p>
		`,
		[],
		[Tags.WebDev, Tags.Angular, Tags.TypeScript, Tags.Projects, Tags.PersonalWebsite]
	),
	new BlogPost('test post', new Date(2017, 2, 23), `<em>test</em> <strong>content</strong>`),
	new BlogPost('test post', new Date(2017, 2, 22), `<em>test</em> <strong>content</strong>`),
	new BlogPost('test post', new Date(2017, 2, 21), `<em>test</em> <strong>content</strong>`),
	new BlogPost('test post', new Date(2017, 2, 20), `<em>test</em> <strong>content</strong>`),
	new BlogPost('test post', new Date(2017, 2, 19), `<em>test</em> <strong>content</strong>`),
	new BlogPost(
		'image test',
		new Date(2017, 2, 23),
		`Testing dynamic embedded images##img1##like the above`,
		[
			new BlogImage('static/images/projects/xfid/cipherDbSample.png')
		]
	)
];

export module BlogQueries {
	export function GetPostsByTag(tag: string): Array<BlogPost> {
		return tag ? (BlogDb.filter(b => ~b.tags.indexOf(tag)) || BlogDb) : BlogDb;
	}
	export function GetNRecentPosts(amt: number): Array<BlogPost> {
		return BlogDb
			.sort(Extensions.SortByProp('date'))
			.slice(0, amt);
	}
}
