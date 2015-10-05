"use strict";
var express = require('express'), //requires express framework module
	mongoose = require('mongoose'), //requires mongoose, an object modeling package for node
	routes = require('./routes'); //moves route definitions outside of file

	
mongoose.connect('mongodb://localhost/m101JS', function (err) {
	if (err) throw err;
  
	var app = express();
	routes(app);
	
	app.listen(3000, function () {
		console.log('now listening on http://localhost:3000');
	})
})

  
