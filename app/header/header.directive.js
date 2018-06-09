(() => {
	angular.module('myApp')
		.directive('header', header);
	
	header.$inject = [];

	function header() {
		return {
			restrict: 'E',
			templateUrl: './html/header/header.html',
			controller: controller,
			controllerAs: '$ctrl',
			link: link,
		}

		function controller() {
			var self = this;

			self.gitLink = 'https://github.com/laarniastrid';
			self.linkedLink = 'https://www.linkedin.com/in/laarniastrid';
			self.twitterLink = 'https://twitter.com/laarniastrid';
			self.youtubeLink = 'https://www.youtube.com/user/HardsuitLoL';
		}

		function link(scope, ele, attr) {
			$('#navWrapper').on('click', function () {
				$('#menuNav').toggle('expand');
			});

			$('#follow').on('click', function () {
				// $('#follow').toggle('expand');
				$('#follow-nav').toggle('expand');
			});
		}
	}
})();