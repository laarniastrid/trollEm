angular.module('myApp')

.controller('listCtrl', function($scope, personInfo, mainSvc, modals) {

  // $scope.currentPerson = personInfo.currentPerson;
  // $scope.hauntings = personInfo.hauntings;

  $scope.personName = mainSvc.getPerson();
  $scope.list = mainSvc.getPersonList();



  $scope.addListItem = function() {
    console.log('clicked');

  };


});  // end listCtrl
