angular.module('myApp')

.controller('listCtrl', function($scope, personInfo, mainSvc) {

  // $scope.currentPerson = personInfo.currentPerson;
  // $scope.hauntings = personInfo.hauntings;

  $scope.currentPerson = mainSvc.getPerson();
  // $scope.personName = mainSvc.getPersonName();
  $scope.personName = $scope.currentPerson.name;
  // $scope.list = mainSvc.getPersonList(person._id);
  $scope.actions = mainSvc.getActions($scope.currentPerson)
    .then(function(response) {
      // console.log(response);
      console.log(response.data);
    });

  $scope.addAction = function(input) {
    console.log(input);
    // var getPerson = mainSvc.getPerson();

    var temp = {
      message: input,
      time: new Date(),
      person: $scope.currentPerson._id
    };

    mainSvc.addNewAction(temp)
      .then(function(response) {
        console.log(response.data._id);
        $scope.currentPerson.actions.push(response.data._id);
        mainSvc.updatePerson($scope.currentPerson);
        console.log($scope.currentPerson);
      });

    // console.log(personId);
    // console.log(personId._id);
    // mainSvc.adNewItem(temp);
    // getPerson.actions.push(input);
    // console.log(mainSvc.getPerson());
    message = '';
    $scope.modalToggle();
  };



  /* ---------- show/hide modal ---------- */
  $scope.showModal = false;
  $scope.modalToggle = function() {
    // console.log('hello');
    $scope.showModal = !$scope.showModal;
  };

});  // end listCtrl
