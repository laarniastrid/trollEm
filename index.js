/* ---------- vars for app ----------*/
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 6000,
    app = express();

/* ---------- app.use to do stuff with app ---------- */
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));  // use to connect with with front end

/* ---------- connect to mongoose ---------- */
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/hauntEm', function(err) {  // hauntEm : name of database
  if (err) throw err;
});
mongoose.connection.once('open', function(err) {  // show mongoose is connected once open to mongodb
  if (err) {
    console.log('error : mongoose.connection.once');
  } else {
    console.log('connected to MongoDB');
  }
});











app.listen(port, function() { // app listen for port
  console.log('listening on port', port);
})
