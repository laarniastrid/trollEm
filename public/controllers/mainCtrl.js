angular.module('myApp')

.controller('mainCtrl', function($scope, $location, mainSvc) {

  $scope.login = function(user) {
    mainSvc.login(user).then(function(response) {
      // console.log(response);
      if (response.data.userFound) {
        // console.log('user is found');
        $location.path('people');
      } else {
        console.log('User not found');
      }
    });
  };




});  // end mainCtrl
