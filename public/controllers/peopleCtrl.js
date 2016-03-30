angular.module('myApp')

.controller('peopleCtrl', function($scope, $location, userInfo, mainSvc) {

  $scope.currentUser = userInfo.currentUser;
  $scope.people = userInfo.people;

  $scope.peopleList = function(person) {
    // console.log('hello');
    // console.log(person);
    mainSvc.setPerson(person);
    $location.path('list');
  };


  $scope.addPerson = function(input) {
    console.log(input);

    mainSvc.addNewPerson(input)
      .then(function(response) {
        $scope.currentUser.people.push(response.data._id);
        console.log(response);
      });

    console.log($scope.currentUser);
    $scope.showModal = !$scope.showModal;
  };


  /* ---------- show/hide modal ---------- */
  $scope.showModal = false;
  $scope.modalToggle = function() {
    // console.log('hello');
    $scope.showModal = !$scope.showModal;
  };


});  // end peopleCtrl
