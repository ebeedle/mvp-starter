var express = require('express');
var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});	

app.post('/posts', function(req, res) {
  ob.push(req.body.data);
  console.log(ob);	
  console.log('post recieved: ', req.body.data);
  
  res.send();

  // if (!req.body) return res.sendStatus(400)
  // res.send('welcome, ' + req.body.username)
})
app.listen(3000, function() {
  console.log('listening on port 3000!');
});

app.get('/posts', function(req, res) {
	console.log(ob);
	res.send(ob);
})
//just post message first.
//seach bar
//on click, search bar will send post request to server
//server will get information, and display it;		