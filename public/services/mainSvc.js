angular.module('myApp')

.service('mainSvc', function($http) {

  // ---------- vars ----------
  this.person = {};
  this.username = {};


  // ---------- setters ----------
  this.setPerson = function(input) {  // set the correct person being clicked on
    person = input;
  };
  this.adNewItem = function(input) {  // create new item under person
    return $http.post('/api/haunt', input);
  };
  this.addNewPerson = function(input) {
    return $http.post('/api/people', input);
  };
  this.addNewAction = function(input) {
    return $http.post('/api/actions', input);
  };
  this.setUsername = function(input) {
    username = input;
  };

  // this.getPersonName = function() {  // get person name
  //   return person.name;
  // };


  // ---------- getters  ----------
  this.login = function(input) {  // login for user
    return $http.post('/api/login', input);
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
  this.getActions = function(input) {
    // console.log(input); // weird things!!!
    // return $http.get('/api/actions/' + input._id);
    return $http.get('/api/actions/' + input);
  };
  this.getPerson = function() {
    return person;
  };
  this.getPersonList = function() {  // get haunting list of selected person
    return person.actions;
  };
  this.getUsername = function() {
    return username;
  };


  // ---------- updates (setters/getters?) ----------
  this.updateUser = function(user, input) {
    return $http.post('/api/user/' + user, input);
  };
  this.updatePerson = function(person, input) {
    return $http.post('/api/person/' + person, input);
  };




});  // end mainSvc
