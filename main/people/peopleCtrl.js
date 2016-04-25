angular.module('myApp')

.controller('peopleCtrl', function($scope, $location, $state, userInfo, mainSvc) {

  $scope.currentUser = userInfo.currentUser;
  $scope.people = mainSvc.getPeople(userInfo.currentUser)
    .then(function(response) {
      $scope.list = response.data.people;
    });

  $scope.addPerson = function(input) {
    mainSvc.addNewPerson(input)
      .then(function(response) {
        var temp = {
          people: response.data._id
        };
        mainSvc.updateUser($scope.currentUser._id, temp);
        $state.reload();
      });
    $scope.modalToggle();
  };

  $scope.actions = function(input) {
    mainSvc.setPerson(input);
    mainSvc.setUsername($scope.currentUser.username);
    $state.go('list', {id: input._id});
  };


  /* ---------- show/hide modal ---------- */
  $scope.showModal = false;
  $scope.modalToggle = function() {
    $scope.showModal = !$scope.showModal;
  };

});  // end peopleCtrl
