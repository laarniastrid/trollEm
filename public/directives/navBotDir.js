angular.module('myApp')

.directive('navBotDir', function() {
  return ({
    restrict: 'E',
    templateUrl: './templates/navBot.html'
  });
});  // end navBotDir
