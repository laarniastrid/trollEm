var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var mailSchema = new Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  html: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Mail', mailSchema);
