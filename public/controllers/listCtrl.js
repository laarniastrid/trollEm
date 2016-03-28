angular.module('myApp')

.controller('listCtrl', function($scope, personInfo, mainSvc) {

  // $scope.currentPerson = personInfo.currentPerson;
  // $scope.hauntings = personInfo.hauntings;

  $scope.person = mainSvc.getPerson();
  $scope.personName = mainSvc.getPersonName();
  $scope.list = mainSvc.getPersonList();


  // $scope.showModal = false;
  // $scope.modalToggle = function() {
  //   console.log('hello');
  //   $scope.showModal = !$scope.showModal;
  // };

  $scope.modalVal = mainSvc.getModalVal();
  $scope.changeToggle = mainSvc.changeToggle();


  $scope.sendMessage = function(mesasge) {

  };

});  // end listCtrl
