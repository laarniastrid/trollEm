angular.module('myApp')

.directive('navTopDir', function() {
  return ({
    restrict: 'E',
    templateUrl: './templates/navTop.html'
  });
});  // end navTopDir
