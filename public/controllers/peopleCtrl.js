angular.module('myApp')

.controller('peopleCtrl', function($scope, $location, userInfo, mainSvc) {

  $scope.currentUser = userInfo.currentUser;
  $scope.people = userInfo.people;

  $scope.findHaunts = function(person) {
    // console.log('hello');
    console.log(person);
    mainSvc.setPerson(person);
    $location.path('list');
  };




  $scope.addPerson = function() {
    console.log('clicked');

  };


/*
$scope.login = function(user) {
  mainSvc.login(user).then(function(response) {
  // console.log('testing');
    if (response.data.userFound) {
      console.log('user is found');
      $location.path('people');
    } else {
      console.log('User not found');
    }
  });
};
*/

});  // end peopleCtrl
