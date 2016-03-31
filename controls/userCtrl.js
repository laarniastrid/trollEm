var User = require('../schemas/userSchema.js');

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
  },
  // update: function(req, res, next) {
  //   var query = {
  //     _id: req.body._id
  //   };
  //   User.findByIdAndUpdate(query, req.body, function(err, r) {
  //     return err ? res.status(500).send(err) : res.status(200).send(r);
  //   });
  // }
  update: function(req, res, next) {
    console.log('here');
    User.findById(req.params.id, function(err, r) {
      if (err) {
        res.status(500).res.send(err);
      } else {
        // res.send(req.body.people);
        r.people.push(req.body.people);
        // res.send(r.people);
        // res.send(r);
        r.save(function(err, r) {
          // res.send(r);
          return err ? res.status(500).send(err) : res.status(200).send(r);
          // res.send(r);
        });

      }
      // res.send('hi');
    });
  }
};
