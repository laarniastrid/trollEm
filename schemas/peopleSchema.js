var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    haunt = require('./actionSchema.js');

var people = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    min: 10,
    max: 10
  },
  email: {
    type: String,
    required: true
  },
  reason: {
    type: String
  },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  actions: [{
    type: Schema.Types.ObjectId,
    ref: 'Action'
  }]
});

module.exports = mongoose.model('Person', people);
