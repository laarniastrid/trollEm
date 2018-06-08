var People = require('../people/peopleSchema'),
    User = require('../user/userSchema');

module.exports = {
  create: function(req, res, next) {
    var person = new People(req.body);
    person.save(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  findAll: function(req, res, next) {
    var query = req.params.id;
    User.findById(query).populate('people').exec(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  findOne: function(req, res, next) {
    var query = req.params.id;
    People.findById(query, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  update: function(req, res, next) {
    console.log('here');
    People.findById(req.params.id, function(err, r) {
      if (err) {
        res.status(500).send(err);
      } else {
        r.actions.push(req.body.action);
        r.save(function(err, r) {
          return err ? res.status(500).send(err) : res.status(200).send(r);
        });
      }
    });
  },
  destroy: function(req, res, next) {
    var query = {
      _id: req.params.id
    };
    People.remove(query, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  }
};
