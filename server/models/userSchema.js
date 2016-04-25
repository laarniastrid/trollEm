var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    person = require('./peopleSchema.js');

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
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
  },
  people: [{
    type: Schema.Types.ObjectId,
    ref: 'Person'
  }]
});

module.exports = mongoose.model('User', userSchema);
