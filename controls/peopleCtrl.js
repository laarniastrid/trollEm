var People = require('../schemas/peopleSchema.js');

module.exports = {
  create: function(req, res, next) {
    var person = new People(req.body);
    person.save(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  findAll: function(req, res, next) {
    var query = {};
    // Person.find(query, function(err, r) {
    //   return err ? res.status(500).send(err) : res.status(200).send(r);
    // });

    People.find(query).populate('people').exec(function(err, r) {
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
    var query = {
      _id: req.params.id
    };
    People.update(query, req.body, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
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
