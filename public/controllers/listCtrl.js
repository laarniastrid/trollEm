angular.module('myApp')

.controller('listCtrl', function($scope, personInfo, mainSvc) {

  // $scope.currentPerson = personInfo.currentPerson;
  // $scope.hauntings = personInfo.hauntings;

  $scope.person = mainSvc.getPerson();
  $scope.personName = mainSvc.getPersonName();
  $scope.list = mainSvc.getPersonList(person._id);


  $scope.showModal = false;
  $scope.modalToggle = function() {
    // console.log('hello');
    $scope.showModal = !$scope.showModal;
  };

  $scope.sendMessage = function(text) {
    var getPerson = mainSvc.getPerson();

    var input = {
      message: text,
      time: new Date(),
      person: getPerson._id
    };

    // console.log(personId);
    // console.log(personId._id);

    mainSvc.setNewItem(input);
    // getPerson.actions.push(input);

    console.log(mainSvc.getPerson());
    message = '';
    $scope.modalToggle();
  };


  // $scope.modalVal = mainSvc.getModalVal();
  // $scope.changeToggle = mainSvc.modalToggle();



});  // end listCtrl
