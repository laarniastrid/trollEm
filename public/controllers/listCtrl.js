angular.module('myApp')

.controller('listCtrl', function($scope, $state, $stateParams, personActions, personInfo, mainSvc) {

  // console.log(personActions);
  var test = mainSvc.getActions($stateParams.id);
  // console.log(test);

  $scope.currentPerson = personActions.data;
  // $scope.personName = $scope.currentPerson.name;
  $scope.personName = personActions.data.name;
  // $scope.actions = mainSvc.getActions($scope.currentPerson._id)
  //   .then(function(response) {
  //     // console.log(response.data); // weird things happening?
  //     $scope.list = response.data.actions;
  //   });
  // $scope.list = personActions.data.actions;
  $scope.actions = mainSvc.getActions(personActions.data._id)
  .then(function(response) {
    // console.log(response.data.actions);
    $scope.list = response.data.actions;
  });


  $scope.addAction = function(input) {
    // console.log(input);
    // console.log($scope.currentPerson._id);
    // var getPerson = mainSvc.getPerson();

    var tempAction = {
      message: input,
      time: new Date(),
      person: $scope.currentPerson._id
    };

    mainSvc.addNewAction(tempAction)
      .then(function(response) {
        // console.log(response.data);
        var temp = {
          action: response.data._id
        };
        // console.log(response.data._id);
        // $scope.currentPerson.actions.push(response.data._id);
        mainSvc.updatePerson($scope.currentPerson._id, temp);
        $state.reload();
        // console.log($scope.currentPerson);
      });
    // message = '';
    $scope.modalToggle();
  };


  /* ---------- show/hide modal ---------- */
  $scope.showModal = false;
  $scope.modalToggle = function() {
    // console.log('hello');
    $scope.showModal = !$scope.showModal;
  };




});  // end listCtrl
