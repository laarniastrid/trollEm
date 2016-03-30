var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    person = require('./peopleSchema.js');

// var validateEmail = function(email) {
//   var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test(email);
// }

var haunterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    min: [6, 'Username is too short'],
    max: [15, 'Username is too long']
  },
  password: {
    type: String,
    required: true,
    min: [6, 'Password is too short'],
    max: [15, 'Password is too long']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // index: true,
    // validate: [validateEmail, 'Please enter a valid email address']
  },
  people: [{
    type: Schema.Types.ObjectId,
    ref: 'person'
  }]
});

module.exports = mongoose.model('User', haunterSchema);
