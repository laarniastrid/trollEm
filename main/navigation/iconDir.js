angular.module('myApp')

.directive('iconDir', function($controller) {
  return {
    restrict: 'E',
    templateUrl: './html/navigation/icons.html',
    scope: {
      icon: '=',
      link: '='
    }
  };
});  // end iconDir
