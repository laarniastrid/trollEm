var users = require('../testData.json');

module.exports = {
  login: function(req, res, next) {
    var userFound = false;
    users.forEach(function(users) {
      if (req.body.username === users.name && req.body.password === users.password) {
        req.session.currentUser = users;
        userFound = true;
      }
    });
    if (userFound) res.send({ userFound: true });
    else res.send({ userFound: false });
  },
  getPeople: function(req, res, next) {
    // var personArray = [];
    // req.session.currentUser.people.forEach(function(person) {
    //   personArray.push(person);
    // });
    res.send({
      currentUser: req.session.currentUser,
      // peopleList: personArray
      people: req.session.currentUser.people
    });
  }
};
