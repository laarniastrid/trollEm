angular.module('myApp')

.directive('iconDir', function($controller) {
  return {
    restrict: 'E',
    templateUrl: './templates/icons.html',
    scope: {
      icon: '=',
      link: '='
    }
  };
});  // end iconDir
