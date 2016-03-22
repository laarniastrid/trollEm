var User = require('../schemas/haunter.js');

module.exports = {
  create: function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  read: function(req, res, next) {
    var query = {};
    if (req.query.username && req.query.password) {
      query = {
        username: req.query.username,
        password: req.query.password
      };
    } else {
      query = {};
    }
    User.find(query, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  }
};
