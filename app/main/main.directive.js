(() => {
	angular.module('myApp')
		.directive('main', main);

	main.$inject = [];

	function main() {
		return {
			restrict: 'E',
			templateUrl: './html/main/main.html',
		};
	};
})();
