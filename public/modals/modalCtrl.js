angular.module('myApp')

.controller('modalCtrl', function($scope, modals) {

  $scope.message = (modals.params().message || 'give me');
  $scope.form = {
    input: (modals.params().placeholder || '')
  };
  $scope.errorMessage = null;
  $scope.cancel = modals.reject;
  $scope.submit = function() {
    if (!$scope.form.input) {
      return($scope.errorMessage = 'please provide something');
    }
    modals.resolve($scope.form.input);
  };

}); // end modalCtrl
