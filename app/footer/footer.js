(() => {
	angular.module('myApp')
		.directive('footer', footer);

	footer.$inject = [];

	function footer() {
		return {
			restrict: 'E',
			templateUrl: './html/footer/footer.html',
			controller: controller,
			controllerAs: '$ctrl',
		}

		function controller() {
			var self = this;

			/* ---------- nav bot icons ----------- */
			self.myGithub = 'fa fa-github-alt';
			self.myLinkedin = 'fa fa-linkedin';
			self.myTwitter = 'fa fa-twitter';
			self.myYoutube = 'fa fa-youtube-play';

			/* ---------- nav bot icons links ----------- */
			self.gitLink = 'https://github.com/laarniastrid';
			self.linkedLink = 'https://www.linkedin.com/in/laarniastrid';
			self.twitterLink = 'https://twitter.com/laarniastrid';
			self.youtubeLink = 'https://www.youtube.com/user/HardsuitLoL';
		}
	}
})();
