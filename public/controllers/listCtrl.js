angular.module('myApp')

.controller('listCtrl', function($scope, personInfo, mainSvc) {

  // $scope.currentPerson = personInfo.currentPerson;
  // $scope.hauntings = personInfo.hauntings;

  $scope.personName = mainSvc.getPerson();
  $scope.list = mainSvc.getPersonList();


  $scope.showModal = false;
  $scope.modalToggle = function() {
    console.log('hello');
    $scope.showModal = !$scope.showModal;
  };

});  // end listCtrl
