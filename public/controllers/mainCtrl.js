angular.module('myApp')

.controller('mainCtrl', function($scope, $location, $state, mainSvc) {

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


  /* ---------- add user ---------- */
  $scope.addNewUser = function(input) {
    if (input.password !== input.passwordConfirm) {
      alert('passwords don\'t match, please re-enter passwords');
    } else {
      var temp = {
        name: input.name,
        username: input.username,
        password: input.password,
        email: input.email
      };
      mainSvc.addNewUser(temp);

      $scope.modalToggle();
      $state.reload();
    }
  };


  /* ---------- show/hide modal ---------- */
  $scope.showModal = false;
  $scope.modalToggle = function() {
    // console.log('hello');
    $scope.showModal = !$scope.showModal;
  };


});  // end mainCtrl
