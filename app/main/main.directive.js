(() => {
	angular.module('myApp')
		.directive('main', main);

	main.$inject = [];

	main = () => {
		return {
			restrict: 'E',
			templateUrl: './html/main/main.html',
		};
	};
})();
