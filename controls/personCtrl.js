var Person = require('../schemas/whoToHaunt.js');

module.exports = {
  create: function(req, res, next) {
    var person = new Person(req.body);
    person.save(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  findAll: function(req, res, next) {
    var query = {};
    Person.find(query, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  findOne: function(req, res, next) {
    var query = req.params.id;
    Person.findById(query, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  update: function(req, res, next) {
    var query = {
      _id: req.params.id
    };
    Person.update(query, req.body, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  destroy: function(req, res, next) {
    var query = {
      _id: req.params.id
    };
    Person.remove(query, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  }
};
