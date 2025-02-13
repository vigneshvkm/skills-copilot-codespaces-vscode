//create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

//set the view engine to ejs
app.set('view engine', 'ejs');

//use body parser
app.use(bodyParser.urlencoded({extended: false}));

//get comments from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

//get comments
app.get('/', function(req, res) {
  res.render('index', {comments: comments});
});

//add comment
app.post('/comment', function(req, res) {
  comments.push(req.body.comment);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.redirect('/');
});

//listen on port 8080
app.listen(8080);
console.log('listening on port 8080');