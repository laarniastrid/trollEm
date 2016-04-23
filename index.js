/* ---------- vars for app ----------*/
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 8000,
    connectPath = process.env.MONGOLAB_URI || process.env.mongoHQ_URL || 'mongodb://localhost:8000',
    app = express(),
    // keys = require('./keys.js'),
    session = require('express-session');
    // nodemailer = require('nodemailer');
    // transporter = nodemailer.createTransport('smtps://user%40-gmail.com:pass@smtp.gmail.com');

/* ---------- app.use to do stuff with app ---------- */
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));  // use to connect with with front end

/* ---------- connect to mongoose ---------- */
mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/trollEm', function(err) {  // hauntEm : name of database
//   if (err) throw err;
// });
mongoose.connect(connectPath, function(err) {  // hauntEm : name of database
  if (err) throw err;
});
mongoose.connection.once('open', function(err) {  // show mongoose is connected once open to mongodb
  if (err) {
    console.log('error : mongoose.connection.once');
  } else {
    console.log('connected to MongoDB');
  }
});

var testCtrl = require('./controls/testCtrl.js'),
    userCtrl = require('./controls/userCtrl.js'),
    peopleCtrl = require('./controls/peopleCtrl.js'),
    actionCtrl = require('./controls/actionCtrl.js');

/* ---------- test for login ---------- */
app.use(session({ secret: process.env.MY_SECRET }));
app.post('/api/login', testCtrl.login);
app.get('/api/userData', testCtrl.userData);
// app.put('/api/user', userCtrl.update);
// app.get('/api/people', testCtrl.getPeople);
// app.get('/api/people/hauntings', testCtrl.getHauntings);


//********** test **********//


/* ---------- user endpoints ---------- */
app.post('/api/signup', userCtrl.create);
app.post('/api/user/:id', userCtrl.update); // update user info (people list)
app.post('/api/person/:id', peopleCtrl.update);
// app.get('/login', userCtrl.read);

/* ---------- people endpoints ---------- */
app.post('/api/people', peopleCtrl.create);
app.get('/api/people/:id', peopleCtrl.findAll);
app.get('/api/people/:id', peopleCtrl.findOne);
app.put('/api/people/:id', peopleCtrl.update);
app.delete('/api/people/:id', peopleCtrl.destroy);


/* ---------- haunt action endpoints ---------- */
app.post('/api/actions', actionCtrl.create);
app.get('/api/actions/:id', actionCtrl.findAll);
app.get('/api/actions/:id', actionCtrl.findOne);
app.put('/api/actions/:id', actionCtrl.update);
app.delete('/api/actions/:id', actionCtrl.destroy);


/* ---------- nodemailer stuff here ---------- */
var mailCtrl = require('./controls/mailCtrl.js');
app.post('/api/messages', mailCtrl.create);




app.listen(process.env.PORT, function() { // app listen for port
  console.log('listening on port', port);
});
