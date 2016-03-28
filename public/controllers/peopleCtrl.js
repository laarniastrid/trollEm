angular.module('myApp')

.controller('peopleCtrl', function($scope, $location, userInfo, mainSvc) {

  $scope.currentUser = userInfo.currentUser;
  $scope.people = userInfo.people;

  $scope.findHaunts = function(person) {
    // console.log('hello');
    // console.log(person);
    mainSvc.setPerson(person);
    $location.path('list');
  };


  $scope.addPerson = function() {
    console.log('clicked');

  };



$scope.showModal = false;
$scope.modalToggle = function() {
  console.log('hello');
  $scope.showModal = !$scope.showModal;
};


});  // end peopleCtrl
