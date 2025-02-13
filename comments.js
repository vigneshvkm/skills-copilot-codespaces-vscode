// Check that all required env variables are set
if (!process.env.FILE) {
    console.error("FILE is unset or set to the empty string");
    process.exit(1);
}
if (!process.env.SEARCH) {
    console.error("SEARCH is unset or set to the empty string");
    process.exit(1);
}

//Create web server
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