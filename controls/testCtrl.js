var users = require('../testData.json');

module.exports = {
  login: function(req, res, next) {
    var userFound = false;
    users.forEach(function(entry) {
      if (req.body.username == entry.username && req.body.password == entry.password) { // change body to query for postman testing
        req.session.currentUser = entry;
        userFound = true;
      }
    });
    if (userFound) res.send({ userFound: true });
    else res.send({ userFound: false });

    // res.send(req.query.password); // testing
  },
  userData: function(req, res, next) {
    // var personArray = [];
    // req.session.currentUser.people.forEach(function(person) {
    //   personArray.push(person);
    // });
    res.send({
      currentUser: req.session.currentUser,
      people: req.session.currentUser.people
    });
  },
  // getHauntings: function(req, res,next) {
  //   res.send({
  //     currentPerson: req.session.currentUser.people,
  //     hauntings: req.session.currentUser.people.hauntings
  //   });
  // }
};
