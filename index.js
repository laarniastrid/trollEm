/* ---------- vars for app ----------*/
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 9010,
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

/* ---------- login page endpoints ---------- */
var userCtrl = require('./controls/userCtrl.js');
app.post('/signup', userCtrl.create);
app.get('/login', userCtrl.read);


/* ---------- haunt action endpoints ---------- */
var actionCtrl = require('./controls/hauntCtrl.js');
app.post('/api/haunt', actionCtrl.create);
app.get('/api/haunt', actionCtrl.findAll);
app.get('/api/haunt/:id', actionCtrl.findOne);
app.put('/api/haunt/:id', actionCtrl.update);
app.delete('/api/haunt/:id', actionCtrl.destroy);

/* ---------- who to haunt endpoints ---------- */
var person = require('./controls/personCtrl.js');
app.post('/api/person', actionCtrl.create);
app.get('/api/person', actionCtrl.findAll);
app.get('/api/person/:id', actionCtrl.findOne);
app.put('/api/person/:id', actionCtrl.update);
app.delete('/api/person/:id', actionCtrl.destroy);





app.listen(port, function() { // app listen for port
  console.log('listening on port', port);
})
