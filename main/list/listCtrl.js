angular.module('myApp')

.controller('listCtrl', function($scope, $state, $stateParams, personActions, personInfo, mainSvc) {

  var test = mainSvc.getActions($stateParams.id);

  $scope.currentPerson = personActions.data;
  $scope.personName = personActions.data.name;
  $scope.actions = mainSvc.getActions(personActions.data._id)
  .then(function(response) {
    $scope.list = response.data.actions;
  });

  $scope.addAction = function(input) {
    var tempAction = {
      message: input,
      time: new Date(),
      person: $scope.currentPerson._id
    };

    mainSvc.addNewAction(tempAction)
      .then(function(response) {
        var temp = {
          action: response.data._id
        };
        mainSvc.updatePerson($scope.currentPerson._id, temp);
        $state.reload();
      });
    $scope.modalToggle();
  };


  /* ---------- show/hide modal ---------- */
  $scope.showModal = false;
  $scope.modalToggle = function() {
    $scope.showModal = !$scope.showModal;
  };

});  // end listCtrl
