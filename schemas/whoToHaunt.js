var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    haunt = require('./hauntAction.js');

var whoToHauntSchema = new Schema({
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  hauntings: [{
    type: haunt
  }]
})

module.exports = mongoose.model('Person', whoToHauntSchema);
