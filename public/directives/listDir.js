angular.module('myApp')

.directive('listDir', function() {
  return {
    restrict: 'C',
    link: function(scope) {
      $('.link-dir').on('hover', function() {
        console.log('hover');
      });
    }
  };
}); // end listDir
