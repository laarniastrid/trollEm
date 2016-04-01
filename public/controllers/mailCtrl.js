angular.module('myApp')

.controller('mailCtrl', function($scope, mainSvc, mailSvc) {

  $scope.mail = function(to, text) {
    

    mailSvc.setMailOptions(to, text); // set mail options

  };

  // $scope.sendMessage

  /*
  this.setMailOptions = function(to, text, html) {
    this.to = to;
    this.text = text;
    this.html = '<p>' + html + '</p>';
  };
  */

});  // end mailCtr
