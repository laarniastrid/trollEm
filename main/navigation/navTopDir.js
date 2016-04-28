angular.module('myApp')

.directive('navTopDir', function() {
  return ({
    restrict: 'E',
    templateUrl: './html/navigation/navTop.html',
    controller: function($scope) {
      $scope.gitLink = 'https://github.com/laarniastrid';
      $scope.linkedLink = 'https://www.linkedin.com/in/laarniastrid';
      $scope.twitterLink = 'https://twitter.com/laarniastrid';
      $scope.youtubeLink = 'https://www.youtube.com/user/HardsuitLoL';
    },
    link: function(scope, ele, attr) {
      $('#navWrapper').on('click', function() {
        $('#menuNav').toggle('expand');
      })

      // $('#menuNav').on('click', function() {
      //   $('#menuNav').toggle('expand');
      // })

      $('#follow').on('click', function() {
        $('#follow').toggle('expand');
        // $('#follow-nav').toggle('expand');
      })
    }
  });
});  // end navTopDir
