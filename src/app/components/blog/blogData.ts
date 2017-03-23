import BlogPost, {BlogImage} from './BlogPost';

export const BlogDb: Array<BlogPost> = [
	new BlogPost('test post', new Date(2017, 2, 23), `<em>test</em> <strong>content</strong>`),
	new BlogPost('test post', new Date(2017, 2, 22), `<em>test</em> <strong>content</strong>`),
	new BlogPost('test post', new Date(2017, 2, 21), `<em>test</em> <strong>content</strong>`),
	new BlogPost('test post', new Date(2017, 2, 20), `<em>test</em> <strong>content</strong>`),
	new BlogPost('test post', new Date(2017, 2, 19), `<em>test</em> <strong>content</strong>`),
	new BlogPost(
		'image test',
		new Date(2017, 2, 24),
		`Just testing whether or not images like this: ##img1## will work`,
		[
			new BlogImage('static/images/projects/xfid/cipherDbSample.png', {style: 'display: block'})
		]
	)
];
