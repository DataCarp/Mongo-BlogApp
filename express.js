"use strict";
var express = require('express'),
    app= express(),
    cons = require('consolidate'), //set of wrappers for express template libraries
    MongoClient = require ('mongodb').MongoClient,
    Server = require('mongodb').Server;

app.engine ('html', cons.swig); //set the module to swig, which is template engine, consilidate integrates it with express
app.set('view engine', 'html'); // set view engine in express to html
app.set('views', _dirname + "/views"); //tell it where to look for the views in the views directory

//synchronous call to db
var mongoclient = new MongoClient (new Server('localhost', 2701,{'native_parser':true}));

//reference to mongo database table
var db = mongoclient.db('course');

app.get('/', function (req,res){

    db.collection('hello_mongo_express').findOne({}, function(err,doc))
    res.render('index', doc);
    //auto adds the extension for html
    });
});

app.get('*', function (req,res){
    res.send("Page not found", 404);

});

mongoclient.open(function (err, mongoclient){
  if (err) throw err;

  app.listen(7000);
  console.log("Express was started");
});
