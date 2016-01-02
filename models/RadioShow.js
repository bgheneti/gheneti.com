var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * RadioShow
 * ==========
 */

var RadioShow = new keystone.List('RadioShow', {
        map: { name: 'number' },
        autokey: { path: 'slug', from: 'number', unique: true }
});

RadioShow.add({
	number: {type: Number, required: true},
        title: { type: String, initial: true},
        publishedDate: { type: Types.Date, required: true, index: true, initial: true },
	spotifyUri: { type: String, required: true, initial: true },
	playlistId: { type: String, initial: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'published', index: true },
        author: { type: Types.Relationship, ref: 'User', index: true },
        content: { type: Types.Html, wysiwyg: true, height: 150, collapse: true },
        categories: { type: Types.Relationship, ref: 'RadioShowCategory', many: true, initial:true }
});

RadioShow.defaultColumns = 'title, state|20%, categories|20%, publishedDate|20%';
RadioShow.register();

