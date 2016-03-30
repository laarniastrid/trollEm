angular.module('myApp')

.service('mainSvc', function($http) {

  this.person = {};
  this.user = {};

  this.login = function(user) {  // login for user
    return $http.post('/api/login', user);
  };
  this.getUser = function() {  // gets people listed under user
    return $http.get('/api/userData')
    .then(function(response) {
      return response.data;
    });
  };
  this.getPeople = function(input) {
    return $http.get('/api/people', input);
  };
  // this.getActions = function(input) {  // not currently needed maybe?
  //   // return $http.get('/api/people/actions')
  //   return $http.get('/api/haunt', input)
  //   .then(function(response) {
  //     return response.data;
  //   });
  // };
  // this.setUser = function(input) {  // set user
  //   user = input;
  // };
  // this.getUser = function() {
  //   return user;
  // };
  this.setPerson = function(input) {  // set the correct person being clicked on
    person = input;
  };
  this.getPerson = function() {
    return person;
  };
  this.getPersonName = function() {  // get person name
    return person.name;
  };
  this.getPersonList = function() {  // get haunting list of selected person
    return person.actions;
  };

  this.adNewItem = function(input) {  // create new item under person
    return $http.post('/api/haunt', input);
  };
  this.addNewPerson = function(input) {
    return $http.post('/api/people', input);
  };
  this.updateUser = function(input) {
    return $http.put('/api/user', input);
  };


  /* ---------- prev stuff ---------- */
  // return {
  //   login: function(user) {  // login for user
  //     return $http.post('/api/login', user);
  //   },
  //   getPeople: function() {  // gets people listed under user
  //     return $http.get('/api/people')
  //     .then(function(response) {
  //       return response.data;
  //     });
  //   },
  //   getActions: function() {  // not currently needed maybe?
  //     return $http.get('/api/people/actions')
  //     .then(function(response) {
  //       return response.data;
  //     });
  //   },
  //   setPerson: function(input) {  // set the correct person being clicked on
  //     person = input;
  //   },
  //   getPerson: function() {
  //     return person;
  //   },
  //   getPersonName: function() {  // get person name
  //     return person.name;
  //   },
  //   getPersonList: function() {  // get haunting list of selected person
  //     return person.actions;
  //   }
  // };


});  // end mainSvc
