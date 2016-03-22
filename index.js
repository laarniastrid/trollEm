/* ---------- vars for app ----------*/
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 9000,
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


/* ---------- haunt action  endpoints ---------- */
var Action = require('./schemas/hauntAction.js');
app.post('/haunt', function(req, res, next) {
  var action = new Action(req.body);
  action.save(function(err, r) {
    return err ? res.status(500).send(err) : res.status(200).send(r);
  })

  // res.status(200).send('post works');
})
app.get('/haunt', function(req, res, next) {
  var query = {};
  if (req.query.status) {
    query = {
      status: req.query.status
    }
  }
  Action.find(query, function(err, r) {
    return err ? res.status(500).send(err) : res.status(200).send(r);
  })
})
app.get('haunt/:id', function(req, res, next) {
  var query = {
    _id: req.params.id
  }
  Action.find(query, function(err, r) {
    return err ? res.status(500).send(err) : res.status(200).send(r);
  })
})
app.delete('/haunt/:id', function(req, res, next) {
  var query = {
    _id: req.params.id
  }
  Action.remove(query, function(err, r) {
    return err ? res.status(500).send(err) : res.status(200).send(r);
  })
})



app.listen(port, function() { // app listen for port
  console.log('listening on port', port);
})
