/* ---------- vars for app ----------*/
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 9000,
    app = express(),
    // passport = require('passport'),
    // LocalStrategy = require('passport-local').Strategy,
    keys = require('./keys.js'),
    // cookieParser = require('cookie-parser'),
    session = require('express-session');
    // router = express.Router();

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

/* ---------- passport local auth ---------- */
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password' });
//       }
//       return done(null, user);
//     });
//   }
// ));
//
// app.use(express.static('public'));
// app.use(cookieParser());
// app.use(session({ secret: keys.mySecret }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(router);
// app.use(express.Router());





/* ---------- test session for login ---------- */
var testCtrl = require('./controls/testCtrl.js');
app.use(session({ secret: keys.mySecret }));
app.post('/api/login', testCtrl.login);
app.get('/api/people', testCtrl.getPeople);
app.get('/api/people/hauntings', testCtrl.getHauntings);




/* ---------- login page endpoints ---------- */
var userCtrl = require('./controls/userCtrl.js');
// app.post('/signup', userCtrl.create);
// app.get('/login', userCtrl.read);


/* ---------- haunt action endpoints ---------- */
var actionCtrl = require('./controls/hauntCtrl.js');
app.post('/api/haunt', actionCtrl.create);
app.get('/api/haunt', actionCtrl.findAll);
app.get('/api/haunt/:id', actionCtrl.findOne);
app.put('/api/haunt/:id', actionCtrl.update);
app.delete('/api/haunt/:id', actionCtrl.destroy);


/* ---------- who to haunt endpoints ---------- */
var personCtrl = require('./controls/personCtrl.js');
app.post('/api/person', personCtrl.create);
app.get('/api/person', personCtrl.findAll);
app.get('/api/person/:id', personCtrl.findOne);
app.put('/api/person/:id', personCtrl.update);
app.delete('/api/person/:id', personCtrl.destroy);





app.listen(port, function() { // app listen for port
  console.log('listening on port', port);
});
