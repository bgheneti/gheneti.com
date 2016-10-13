var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Init locals
	locals.section = 'misc';
	locals.data = {
		misc: []
	};
	
	// Load the posts
        view.on('init', function(next) { 
		var q = keystone.list('Misc').model.findOne({ 
			state: 'published', 
			slug: 'main'
		}).populate('author categories'); 

		q.exec(function(err, result) { 
			locals.data.misc = result; 
			console.log(result.title);
			next(err); 
		});
	}); 
       	
	// Render the view
	view.render('misc');
	
};
