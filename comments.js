//create web server
var express = require('express');
var app = express();

//create comments array
var comments = [
    {name: 'John', comment: 'Hello'},
    {name: 'Mary', comment: 'Hi'}
];

//display comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

//listen on port 3000
app.listen(3000, function() {
    console.log('Listening on http://localhost:3000');
});