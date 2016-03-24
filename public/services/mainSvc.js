angular.module('myApp')

.service('mainSvc', function($http) {

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
    }
  };

});  // end mainSvc
