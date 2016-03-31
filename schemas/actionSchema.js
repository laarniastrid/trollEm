var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hauntActionSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Action', hauntActionSchema);
