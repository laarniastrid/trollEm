/* ---------- vars for app ----------*/
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 8000,
    connectPath = process.env.MONGOLAB_URI || 'mongodb://localhost:8000',
    app = express(),
    session = require('express-session'),
    // keys = require('./keys.js'),
    // siteSecret = process.env.MY_SECRET || keys.siteSecret;
    siteSecret = process.env.MY_SECRET;


/* ---------- app.use to do stuff with app ---------- */
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));  // use to connect with with front end


/* ---------- connect to mongoose ---------- */
mongoose.set('debug', true);
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

var testCtrl = require('./server/controls/testCtrl.js'),
    userCtrl = require('./server/controls/userCtrl.js'),
    peopleCtrl = require('./server/controls/peopleCtrl.js'),
    actionCtrl = require('./server/controls/actionCtrl.js');

/* ---------- test for login ---------- */
app.use(session({ secret: siteSecret }));
app.post('/api/login', testCtrl.login);
app.get('/api/userData', testCtrl.userData);


/* ---------- user endpoints ---------- */
app.post('/api/signup', userCtrl.create);
app.post('/api/user/:id', userCtrl.update); // update user info (people list)
app.post('/api/person/:id', peopleCtrl.update);


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
var mailCtrl = require('./server/controls/mailCtrl.js');
app.post('/api/messages', mailCtrl.create);

/* ---------- logout user ---------- */
// app.get('/logout', userCtrl.logoutUser);

app.listen(port, function() { // app listen for port
  console.log('listening on port', port);
});
