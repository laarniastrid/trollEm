angular.module('myApp')

.directive('listDir', function() {
  return {
    restrict: 'EA',
    link: function(scope, ele, attr) {
      $('.list-dir').on('click', function() {
        console.log('hello there');
      });
    }
  };
}); // end listDir
