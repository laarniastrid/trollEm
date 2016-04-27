var users = require('../models/userSchema.js');

module.exports = {
  login: function(req, res, next) {
    var userFound = false;
    users.findOne({ username: req.body.username }).exec(function(err, r) {
      if (req.body.password === r.password) {
          req.session.currentUser = r;
          res.send({ userFound: true });
      }
    });
  },
  userData: function(req, res, next) {
    res.send({
      currentUser: req.session.currentUser,
      people: req.session.currentUser.people
    });
  },
};
