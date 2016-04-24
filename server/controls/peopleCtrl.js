var People = require('../models/peopleSchema.js'),
    User = require('../models/userSchema.js');

module.exports = {
  create: function(req, res, next) {
    var person = new People(req.body);
    person.save(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
      // return err ? res.status(500).send(err) : res.status(200).send(mongoose.Types.);
    });
  },
  findAll: function(req, res, next) {
    // var query = {};
    var query = req.params.id;
    // Person.find(query, function(err, r) {
    //   return err ? res.status(500).send(err) : res.status(200).send(r);
    // });

    User.findById(query).populate('people').exec(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
    /*  // other option thing, current unused
    User.findOne(query).populate('people').exec(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
    */
  },
  findOne: function(req, res, next) {
    var query = req.params.id;
    People.findById(query, function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
  },
  // update: function(req, res, next) {
  //   var query = {
  //     _id: req.params.id
  //   };
  //   People.update(query, req.body, function(err, r) {
  //     return err ? res.status(500).send(err) : res.status(200).send(r);
  //   });
  // },
  update: function(req, res, next) {
    console.log('here');
    People.findById(req.params.id, function(err, r) {
      if (err) {
        res.status(500).send(err);
      } else {
        // console.log(r.actions); // before push
        r.actions.push(req.body.action);
        // console.log(r.actions); // after push
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
