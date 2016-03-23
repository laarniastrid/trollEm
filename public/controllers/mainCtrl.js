angular.module('myApp')

.controller('mainCtrl', function($scope, mainSvc) {

  // $scope.test = "hello there";

  $scope.login = function(user) {
    mainSvc.login(user).then(function(response) {
    console.log('testing');
      if (response.data.userFound) {
        console.log('user is found');
        $location.path('people');
      } else {
        alert('User not found');
      }
    });
  };

});  // end mainCtrl
