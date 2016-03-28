angular.module('myApp')

.controller('listCtrl', function($scope, personInfo, mainSvc, ngDialog) {

  // $scope.currentPerson = personInfo.currentPerson;
  // $scope.hauntings = personInfo.hauntings;

  $scope.personName = mainSvc.getPerson();
  $scope.list = mainSvc.getPersonList();



  // $scope.addListItem = function() {
  //   console.log('clicked');
  //
  // };



  $scope.clickToOpen = function() {
    ngDialog.open({
      templateUrl: './templates/listPopup.html',
      className: 'ngdialog-theme-default',
      showClose: true,
      overlay: false
    });
  };

  $scope.closeThisDialog = function(closeValue) {
    // ngDialog.close;
  };


});  // end listCtrl
