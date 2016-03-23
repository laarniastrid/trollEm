angular.module('myApp')

.controller('mainCtrl', function($scope, mainSvc) {

  // $scope.test = "hello there";

  $scope.login = function(user) {
    console.log('testing');
    mainSvc.login(user).then(function(response) {
      if (response.data.userFound) {
        console.log('user is found');
        $location.path('people');
      } else {
        alert('User not found');
      }
    });
  };

});  // end mainCtrl
