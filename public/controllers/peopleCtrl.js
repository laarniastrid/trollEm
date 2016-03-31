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
        // $scope.currentUser.people.push(response.data._id);
        // mainSvc.updateUser($scope.currentUser);
        // console.log($scope.currentUser);

        // $scope.reloadPage();
        // console.log('here');
        var temp = {
          people: response.data._id
        };
        // var temp = {
        //   tempUserId: $scope.currentUser._id,
        //   tempPersonId: response.data._id
        // }
        // mainSvc.test($scope.currentUser._id, response.data._id);
        mainSvc.test($scope.currentUser._id, temp);
        $state.reload();
      });
    $scope.showModal = !$scope.showModal;
  };

  // $scope.reloadPage = setTimeout(function () {
  //   $location.path('people');
  // }, 10);

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
