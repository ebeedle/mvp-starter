var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');

});
var itemSchema = mongoose.Schema({
  // quantity: Number,
  text: String


});
var Item = mongoose.model('Item', itemSchema);

// var john = new Item({description: 'johny'})
//  john.save(function (err, john) {
//   if (err) {
//     console.log('Errorrrrrr')
//   } 
// })
// Item.remove(function(err, item) {});


var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

//new Item({description: 'bob'  }) - this will add item to database?

module.exports.selectAll = selectAll;
module.exports.Item = Item;
// var bill = new Item({description: 'billy'})
// bill.save(function (err, bill) {
//   if (err) {
//     console.log('Errorrrrrr')
//   } 
// })
// Item.find({}, function(err, people) {console.log('finding: ', people)})
// Item.find({}, function(err, items) {
//   if (err) {
//     return console.err(err);
//   }
//   console.log(items);
// })
// var john = new Item({description: 'johny'})
// var danny = new Item({description: 'danny'})

// john.save(function (err, john) {
//   if (err) {
//     console.log('Errorrrrrr')
//   } 
// })