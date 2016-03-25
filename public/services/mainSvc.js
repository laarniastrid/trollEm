angular.module('myApp')

.service('mainSvc', function($http) {

  this.aPerson = {};

  return {
    login: function(user) {
      return $http.post('/api/login', user);
    },
    getPeople: function() {
      return $http.get('/api/people')
      .then(function(response) {
        return response.data;
      });
    },
    getHauntings: function() {
      return $http.get('/api/people/hauntings')
      .then(function(response) {
        return response.data;
      });
    },
    getPerson: function() {
      return aPerson.name;
    },
    getPersonList: function() {
      return aPerson.hauntings;
    },
    setPerson: function(n) {
      aPerson = n;
    }
  };


});  // end mainSvc
