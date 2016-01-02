var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var RadioShowCategory = new keystone.List('RadioShowCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});

RadioShowCategory.add({
	name: { type: String, required: true },
	index: { type: Number, required: true, initial: true }
});

RadioShowCategory.relationship({ ref: 'RadioShow', path: 'categories' });

RadioShowCategory.register();
