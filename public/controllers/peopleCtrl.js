angular.module('myApp')

.controller('peopleCtrl', function($scope, userInfo) {

  $scope.currentUser = userInfo.currentUser;
  $scope.people = userInfo.people;

});  // end peopleCtrl
