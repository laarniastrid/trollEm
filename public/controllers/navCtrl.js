angular.module('myApp')

.controller('navCtrl', function($scope) {

  $scope.aboutModal = false;
  $scope.contactModal = false;

  $scope.modalToggle = function(type) {
    if (type == 'about') {
      $scope.aboutModal = !$scope.aboutModal;
    } else if (type == 'contact') {
      $scope.contactModal = !$scope.contactModal;
    }
  };


  

});  // end navCtrl
