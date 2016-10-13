var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Misc = new keystone.List('Misc', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Misc.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Markdown, height: 150 },
		extended: { type: Types.Markdown, height: 400 }
	},
	parent: { type: Types.Relationship, ref: 'Misc', many: true },
	children: { type: Types.Relationship, ref: 'Misc', many: true },
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true }
});

Misc.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Misc.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Misc.register();
