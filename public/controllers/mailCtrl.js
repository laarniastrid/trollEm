angular.module('myApp')

.controller('mailCtrl', function($scope, mainSvc, mailSvc) {

  $scope.sendMessage = function(text) {
    $scope.username = mainSvc.getUsername();

    $scope.thisTest = mainSvc.getUser()
    .then(function(response) {
      $scope.mailTo = response.currentUser.email;

      mailSvc.setMailOptions($scope.mailTo, text, $scope.username); // set mail options
      $scope.mailOptions = mailSvc.getMailOptions();
      mailSvc.sendMail($scope.mailOptions)
      .then(function(response) {
        console.log(response);
      });

    });
  };

});  // end mailCtr
