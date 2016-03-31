angular.module('myApp')

.controller('peopleCtrl', function($scope, $location, $state, userInfo, mainSvc) {

  $scope.currentUser = userInfo.currentUser;
  // $scope.people = userInfo.people;
  $scope.people = mainSvc.getPeople(userInfo.currentUser)
    .then(function(response) {
      // console.log(response.data);
      $scope.list = response.data.people;
    });

  $scope.addPerson = function(input) {
    // console.log(input);
    mainSvc.addNewPerson(input)
      .then(function(response) {
        var temp = {
          people: response.data._id
        };
        mainSvc.updateUser($scope.currentUser._id, temp);
        $state.reload();
      });
    $scope.showModal = !$scope.showModal;
  };

  $scope.actions = function(input) {
    // console.log('hello');
    // console.log(input);
    mainSvc.setPerson(input);
    $location.path('list');
  };

  /* ---------- show/hide modal ---------- */
  $scope.showModal = false;
  $scope.modalToggle = function() {
    // console.log('hello');
    $scope.showModal = !$scope.showModal;
  };

});  // end peopleCtrl
