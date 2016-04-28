angular.module('myApp')

.service('loginService', function($http) {

  this.logoutUser = () => {
    return $http({
      method: 'GET',
      url: '/logout'
    }).success(function() {
      $state.go('/');
    })
  }

})  // end loginsvc
