var People = require('../schemas/peopleSchema.js'),
    User = require('../schemas/userSchema.js');

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
    var query = req.body;
    // Person.find(query, function(err, r) {
    //   return err ? res.status(500).send(err) : res.status(200).send(r);
    // });

    User.findOne(req.body).populate('people').exec(function(err, r) {
      return err ? res.status(500).send(err) : res.status(200).send(r);
    });
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
