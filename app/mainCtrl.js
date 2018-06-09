angular.module('myApp')

.controller('mainCtrl', function($scope, $location, $state, mainSvc) {

  $scope.login = function(user) {
    mainSvc.login(user).then(function(response) {
      if (response.data.userFound) {
        $location.path('people');
      } else {
        console.log('User not found');
      }
    });
  };


  /* ---------- add user ---------- */
  $scope.addNewUser = function(input) {
    if (input.username.length < 6) {
      alert('Username needs to be at least 6 characters long');
    } else if (input.password !== input.passwordConfirm) {
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
    $scope.showModal = !$scope.showModal;
  };

});  // end mainCtrl
