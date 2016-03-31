/* ---------- vars for app ----------*/
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 8000,
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
mongoose.connect('mongodb://localhost/trollEm', function(err) {  // hauntEm : name of database
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




var testCtrl = require('./controls/testCtrl.js'),
    userCtrl = require('./controls/userCtrl.js'),
    peopleCtrl = require('./controls/peopleCtrl.js'),
    actionCtrl = require('./controls/actionCtrl.js');

/* ---------- test for login ---------- */
app.use(session({ secret: keys.mySecret }));
app.post('/api/login', testCtrl.login);
app.get('/api/userData', testCtrl.userData);
app.put('/api/user', userCtrl.update);
// app.get('/api/people', testCtrl.getPeople);
// app.get('/api/people/hauntings', testCtrl.getHauntings);

//********** test **********//
app.post('/api/test/:id', userCtrl.update);

/* ---------- user endpoints ---------- */
app.post('/api/signup', userCtrl.create);
// app.get('/login', userCtrl.read);

/* ---------- people endpoints ---------- */
app.post('/api/people', peopleCtrl.create);
app.get('/api/people', peopleCtrl.findAll);
app.get('/api/people/:id', peopleCtrl.findOne);
app.put('/api/people/:id', peopleCtrl.update);
app.delete('/api/people/:id', peopleCtrl.destroy);


/* ---------- haunt action endpoints ---------- */
app.post('/api/actions', actionCtrl.create);
app.get('/api/actions', actionCtrl.findAll);
app.get('/api/actions/:id', actionCtrl.findOne);
app.put('/api/actions/:id', actionCtrl.update);
app.delete('/api/actions/:id', actionCtrl.destroy);




app.listen(port, function() { // app listen for port
  console.log('listening on port', port);
});
