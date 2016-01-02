var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var PostCategory = new keystone.List('PostCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});

PostCategory.add({
	name: { type: String, required: true },
	index: { type: Number, required: true, initial: true}
});

PostCategory.relationship({ ref: 'Post', path: 'categories' });

PostCategory.register();
