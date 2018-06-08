var Actions = require('../actions/actionSchema'),
    People = require('../people/peopleSchema');

module.exports = {
  create: function(req, res, next) {
    var action = new Actions(req.body);
    action.save(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  findAll: function(req, res, next) {
    var query = req.params.id;

    People.findById(query).populate('actions').exec(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  findOne: function(req, res, next) {
    var query = req.params.id;
    Actions.findById(query, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  update: function(req, res, next) {
    var query = {
      _id: req.params.id
    };
    Actions.update(query, req.body, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  destroy: function(req, res, next) {
    var query = {
      _id: req.params.id
    };
    Actions.remove(query, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  }
};
