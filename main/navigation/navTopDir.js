angular.module('myApp')

.directive('navTopDir', function() {
  return ({
    restrict: 'E',
    templateUrl: './html/navigation/navTop.html'
  });
});  // end navTopDir
