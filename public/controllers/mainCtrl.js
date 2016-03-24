angular.module('myApp')

.controller('mainCtrl', function($scope, $location, mainSvc) {

  // $scope.test = function() {
  //   console.log('hello there');
  // };

  $scope.login = function(user) {
    mainSvc.login(user).then(function(response) {
    console.log('testing');
      if (response.data.userFound) {
        console.log('user is found');
        $location.path('people');
      } else {
        console.log('User not found');
      }
    });
  };

  $scope.myGithub = 'fa fa-github-alt';
  $scope.myLinkedin = 'fa fa-linkedin';
  $scope.myTwitter = 'fa fa-twitter';
  $scope.myYoutube = 'fa fa-youtube-play';

});  // end mainCtrl
