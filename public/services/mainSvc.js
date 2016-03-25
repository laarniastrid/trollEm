angular.module('myApp')

.service('mainSvc', function($http) {

  this.aPerson = {};

  return {
    login: function(user) {  // login for user
      return $http.post('/api/login', user);
    },
    getPeople: function() {  // gets people listed under user
      return $http.get('/api/people')
      .then(function(response) {
        return response.data;
      });
    },
    getHauntings: function() {  // not currently needed maybe?
      return $http.get('/api/people/hauntings')
      .then(function(response) {
        return response.data;
      });
    },
    setPerson: function(n) {  // set the correct person being clicked on
      aPerson = n;
    },
    getPerson: function() {  // get person name
      return aPerson.name;
    },
    getPersonList: function() {  // get haunting list of selected person
      return aPerson.hauntings;
    }
  };


});  // end mainSvc
