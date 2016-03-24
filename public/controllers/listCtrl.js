angular.module('myApp')

.controller('listCtrl', function($scope, personInfo) {

  $scope.currentPerson = personInfo.currentPerson;
  $scope.haungints = personInfo.hauntings;

});  // end listCtrl
