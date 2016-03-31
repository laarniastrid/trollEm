// var users = require('../testData.json');
var users = require('../schemas/userSchema.js');

module.exports = {
  login: function(req, res, next) {
    var userFound = false;
    console.log(req.body);
    users.findOne({ username: req.body.username }).exec(function(err, r) {
      if (req.body.password === r.password) {
          req.session.currentUser = r;
          // userFound = true;
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
