angular.module('myApp')

.controller('mailCtrl', function($scope, mainSvc, mailSvc) {

  $scope.sendMessage = function(text) {
    console.log(text);
    $scope.username = mainSvc.getUsername();
    $scope.thisTest = mainSvc.getUser()
    .then(function(response) {
      console.log($scope.username, $scope.thisTest);
      var getPerson = mainSvc.getPerson();
      $scope.mailTo = getPerson.email;
      console.log(getPerson, $scope.mailTo)
      mailSvc.setMailOptions($scope.mailTo, text, $scope.username); // set mail options
      $scope.mailOptions = mailSvc.getMailOptions();
      mailSvc.sendMail($scope.mailOptions)
      .then(function(response) {
        console.log(response);
      });
    });
  };

});  // end mailCtr
