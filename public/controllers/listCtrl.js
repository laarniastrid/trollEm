angular.module('myApp')

.controller('listCtrl', function($scope, personInfo, mainSvc) {

  // $scope.currentPerson = personInfo.currentPerson;
  // $scope.hauntings = personInfo.hauntings;

  $scope.personName = mainSvc.getPerson();
  $scope.list = mainSvc.getPersonList();



  $scope.addListItem = function() {
    console.log('clicked');

    prompt()
      .title('this is a test title')
      .textContent('testing content')
      .placholder('this is a placeholder')
      .label('a label')
      .ok('okay')
      .cancel('cancelled');
  };


});  // end listCtrl
