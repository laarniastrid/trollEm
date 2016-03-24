angular.module('myApp')

.directive('navBotDir', function() {
  return ({
    restrict: 'E',
    templateUrl: './templates/navBot.html',
    controller: function($scope) {
      /* ---------- nav bot icons ----------- */
      $scope.myGithub = 'fa fa-github-alt';
      $scope.myLinkedin = 'fa fa-linkedin';
      $scope.myTwitter = 'fa fa-twitter';
      $scope.myYoutube = 'fa fa-youtube-play';

      /* ---------- nav bot icons links ----------- */
      $scope.gitLink = 'https://github.com/laarniastrid';
      $scope.linkedLink = 'https://www.linkedin.com/in/laarniastrid';
      $scope.twitterLink = 'https://twitter.com/laarniastrid';
      $scope.youtubeLink = 'https://www.youtube.com/user/HardsuitLoL';
    }
  });
});  // end navBotDir
