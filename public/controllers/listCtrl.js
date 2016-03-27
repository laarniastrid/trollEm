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
      template: './templates/listPopup.html',
      className: 'ngdialog-theme-default',
      link: function(scope, ele, attr) {
        $(scope).on('click', function() {
          ngDialog.close();
        });
      }
    });
  };


});  // end listCtrl
