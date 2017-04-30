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
// app.use('/posts', express.static(__dirname + '/../react-client/dist/index2.html'));
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

// var jess = new items.Item({description: 'jessy'})
// jess.save(function(err, jess) {
//   if (err) {console.log('errorr!')}
//   });

app.post('/', function(req, res) {
  var message = new items.Item({text: req.body.data});
  message.save(function(err, message) {
    if (err) {
      console.log('error')
    }
  })

  items.Item.find({}, function(err, docs) {
    var messages = docs.map(function(message) {
        return message.text;
      })
    if (err) {
      res.json(err) 
    } else {
      res.end(JSON.stringify(messages));  //end
    }
  })


  // if (!req.body) return res.sendStatus(400)
  // res.send('welcome, ' + req.body.username)
})
// var c = items.Item.find({}, function(err, items) { console.log(items[0])});
// console.log(c);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

app.get('/posts', function(req, res) {
})
//just post message first.
//seach bar
//on click, search bar will send post request to server
//server will get information, and display it;		