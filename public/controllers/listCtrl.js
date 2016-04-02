angular.module('myApp')

.controller('listCtrl', function($scope, $state , personInfo, mainSvc) {

  $scope.currentPerson = mainSvc.getPerson();
  $scope.personName = $scope.currentPerson.name;
  $scope.actions = mainSvc.getActions($scope.currentPerson)
    .then(function(response) {
      // console.log(response.data);
      $scope.list = response.data.actions;
    });

  $scope.addAction = function(input) {
    // console.log(input);
    // console.log($scope.currentPerson._id);
    // var getPerson = mainSvc.getPerson();

    var tempAction = {
      message: input,
      time: new Date(),
      person: $scope.currentPerson._id
    };

    mainSvc.addNewAction(tempAction)
      .then(function(response) {
        // console.log(response.data);
        var temp = {
          action: response.data._id
        };
        // console.log(response.data._id);
        // $scope.currentPerson.actions.push(response.data._id);
        mainSvc.updatePerson($scope.currentPerson._id, temp);
        $state.reload();
        // console.log($scope.currentPerson);
      });
    // message = '';
    $scope.modalToggle();
  };


  /* ---------- show/hide modal ---------- */
  $scope.showModal = false;
  $scope.modalToggle = function() {
    // console.log('hello');
    $scope.showModal = !$scope.showModal;
  };

  /* ---------- testing mailer ---------- */
  // $scope.sendMessage = function(to, text) {
  //   console.log('placeholder');
  //   $scope.username = mainSvc.getUsername();
  //
  //   mainSvc.setMailOptions(to, text, $scope.username); // set mail options
  //   $scope.mailOptions = mainSvc.getMailOptions();
  //   mainSvc.sendMail($scope.mailOptions)
  //   .then(function(response) {
  //     console.log(response);
  //   });
  //
  // };


});  // end listCtrl
