var Action = require('../schemas/hauntAction.js');

module.exports = {
  create: function(req, res, next) {
    var action = new Action(req.body);
    action.save(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    })
  },
  findAll: function(req, res, next) {
    // var query = {};
    Action.find({}, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    })
  },
  findOne: function(req, res, next) {
    var query = req.params.id;
    Action.findById(query, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    })
  },
  update: function(req, res, next) {
    var query = {
      _id: req.params.id
    }
    Action.update(query, req.body, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    })
  },
  destroy: function(req, res, next) {
    var query = {
      _id: req.params.id
    }
    Action.remove(query, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    })
  }
}
