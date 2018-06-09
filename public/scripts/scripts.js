angular.module('myApp', ['ui.router'])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

  $stateProvider
	// .state('main', {
	// 	url: '/',
	// 	templateUrl: '<></>',
	// 	controller: 'mainCtrl'
	// })
    .state('login', {
      url: '/login',
      templateUrl: '../html/login/login.html',
      controller: 'mainCtrl'
    })
    .state('people', {
      url: '/people',
      templateUrl: '../html/people/people.html',
      controller: 'peopleCtrl',
      resolve: {
        userInfo: ["mainSvc", function(mainSvc) {
          return mainSvc.getUser();
        }]
      }
    })
    .state('list', {
      url: '/list/:id',
      templateUrl: '../html/list/list.html',
      controller: 'listCtrl',
      resolve: {
        personInfo: ["mainSvc", function(mainSvc) {
          return mainSvc.getPerson();
        }],
        personActions: ["mainSvc", "$stateParams", function(mainSvc, $stateParams) {
          if ($stateParams.id) {
            return mainSvc.getActions($stateParams.id);
          }
        }]
      }
    });

    $urlRouterProvider.otherwise('/login');
}]); // end config

(() => {
	angular.module('myApp')

		.directive('navBotDir', function () {
			return ({
				restrict: 'E',
				templateUrl: './html/footer/navBot.html',
				controller: function ($scope) {
					/* ---------- nav bot icons ----------- */
					$scope.myGithub = 'fa fa-github-alt';
					$scope.myLinkedin = 'fa fa-linkedin';
					$scope.myTwitter = 'fa fa-twitter';
					$scope.myYoutube = 'fa fa-youtube-play';

					/* ---------- nav bot icons links ----------- */
					$scope.gitLink = 'https://github.com/laarniastrid';
					$scope.linkedLink = 'https://www.linkedin.com/in/laarniastrid';
					$scope.twitterLink = 'https://twitter.com/laarniastrid';
					$scope.youtubeLink = 'https://www.youtube.com/user/HardsuitLoL';
				}
			});
		}); // end navBotDir

})();
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
(() => {
	angular.module('myApp')

		.directive('iconDir', function ($controller) {
			return {
				restrict: 'E',
				templateUrl: './html/icon/icons.html',
				scope: {
					icon: '=',
					link: '='
				}
			};
		}); // end iconDir

})();
(() => {
	angular.module('myApp')

		.controller('listCtrl', function ($scope, $state, $stateParams, personActions, personInfo, mainSvc) {

			var test = mainSvc.getActions($stateParams.id);

			$scope.currentPerson = personActions.data;
			$scope.personName = personActions.data.name;
			$scope.actions = mainSvc.getActions(personActions.data._id)
				.then(function (response) {
					$scope.list = response.data.actions;
				});

			$scope.addAction = function (input) {
				var tempAction = {
					message: input,
					time: new Date(),
					person: $scope.currentPerson._id
				};

				mainSvc.addNewAction(tempAction)
					.then(function (response) {
						var temp = {
							action: response.data._id
						};
						mainSvc.updatePerson($scope.currentPerson._id, temp);
						$state.reload();
					});
				$scope.modalToggle();
			};

			/* ---------- show/hide modal ---------- */
			$scope.showModal = false;
			$scope.modalToggle = function () {
				$scope.showModal = !$scope.showModal;
			};

		}); // end listCtrl

})();
(() => {
	angular.module('myApp')

		.directive('listDir', function () {
			return {
				restrict: 'EA',
				link: function (scope, ele, attr) {
					$('.list-dir').on('click', function () {
						console.log('hello there');
					});
				}
			};
		}); // end listDir

})();
(() => {
	angular.module('myApp')

		.service('loginService', function ($http) {

			// this.logoutUser = () => {
			//   return $http({
			//     method: 'GET',
			//     url: '/logout'
			//   }).success(function() {
			//     $state.go('/');
			//   })
			// }

		}) // end loginsvc

})();
(() => {
	angular.module('myApp')

		.controller('mailCtrl', function ($scope, mainSvc, mailSvc) {

			$scope.sendMessage = function (text) {
				$scope.username = mainSvc.getUsername();
				$scope.thisTest = mainSvc.getUser()
					.then(function (response) {
						var getPerson = mainSvc.getPerson();
						$scope.mailTo = getPerson.email;
						mailSvc.setMailOptions($scope.mailTo, text, $scope.username); // set mail options
						$scope.mailOptions = mailSvc.getMailOptions();
						mailSvc.sendMail($scope.mailOptions)
						// .then(function(response) {
						// console.log(response);
						// });
					});
			};

		}); // end mailCtr

})();
(() => {
	angular.module('myApp')

		.service('mailSvc', function ($http) {

			/* ---------- mailSvc vars ---------- */
			var email = 'epictrollem@yahoo.com';
			var subject = 'You\'ve been trolled!!';
			var temp = {};

			/* ---------- setters/constructors ---------- */
			this.setMailOptions = function (to, text, username) {
				temp.from = email;
				temp.to = to;
				temp.subject = subject;
				temp.text = text;
				temp.html = '<h1>Surprise!! ' + temp.text + '</h1><p>~ from the troll: <strong>' + username + '</strong></p>';
			};

			/* ---------- getters ---------- */
			this.getMailOptions = function () { // mail object to send to post
				return temp;
			};

			/* ---------- manipulators ---------- */
			this.sendMail = function (input) {
				// console.log(input);
				return $http.post('/api/messages', input);
			};

		}); // end mailSvc

})();
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

(() => {
	angular.module('myApp')

		.controller('mainCtrl', function ($scope, $location, $state, mainSvc) {

			$scope.login = function (user) {
				mainSvc.login(user).then(function (response) {
					if (response.data.userFound) {
						$location.path('people');
					} else {
						console.log('User not found');
					}
				});
			};


			/* ---------- add user ---------- */
			$scope.addNewUser = function (input) {
				if (input.username.length < 6) {
					alert('Username needs to be at least 6 characters long');
				} else if (input.password !== input.passwordConfirm) {
					alert('passwords don\'t match, please re-enter passwords');
				} else {
					var temp = {
						name: input.name,
						username: input.username,
						password: input.password,
						email: input.email
					};
					mainSvc.addNewUser(temp);

					$scope.modalToggle();
					$state.reload();
				}
			};


			/* ---------- show/hide modal ---------- */
			$scope.showModal = false;
			$scope.modalToggle = function () {
				$scope.showModal = !$scope.showModal;
			};

		}); // end mainCtrl

})();
(() => {
	angular.module('myApp')

		.service('mainSvc', function ($http) {

			// ---------- vars ----------
			this.person = {};
			this.username = {};


			// ---------- setters ----------
			this.setPerson = function (input) { // set the correct person being clicked on
				person = input;
			};
			this.adNewItem = function (input) { // create new item under person
				return $http.post('/api/haunt', input);
			};
			this.addNewPerson = function (input) {
				return $http.post('/api/people', input);
			};
			this.addNewAction = function (input) {
				return $http.post('/api/actions', input);
			};
			this.setUsername = function (input) {
				username = input;
			};


			// ---------- getters  ----------
			this.login = function (input) { // login for user
				return $http.post('/api/login', input);
			};
			this.getUser = function () { // gets people listed under user
				return $http.get('/api/userData')
					.then(function (response) {
						return response.data;
					});
			};
			this.getPeople = function (input) {
				return $http.get('/api/people/' + input._id);
			};
			this.getActions = function (input) {
				return $http.get('/api/actions/' + input);
			};
			this.getPerson = function () {
				return person;
			};
			this.getPersonList = function () { // get haunting list of selected person
				return person.actions;
			};
			this.getUsername = function () {
				return username;
			};


			// ---------- constructors/updates (setters/getters?) ----------
			this.updateUser = function (user, input) {
				return $http.post('/api/user/' + user, input);
			};
			this.updatePerson = function (person, input) {
				return $http.post('/api/person/' + person, input);
			};
			this.addNewUser = function (input) {
				return $http.post('/api/signup', input);
			};

		}); // end mainSvc

})();
(() => {
	angular.module('myApp')

		.controller('navCtrl', function ($scope, $state, loginService) {

			$scope.aboutModal = false;
			$scope.contactModal = false;

			$scope.modalToggle = function (type) {
				if (type == 'about') {
					$scope.aboutModal = !$scope.aboutModal;
				} else if (type == 'contact') {
					$scope.contactModal = !$scope.contactModal;
				}
			};

			$scope.addPost = function (data) {
				data.name = '';
				data.email = '';
				data.phone = '';
				data.text = '';

				$scope.modalToggle('contact');
			};

			// $scope.logoutUser = () => {
			//   // loginService.logoutUser();
			//   $state.go('/login');
			// }

		}); // end navCtrl

})();
(() => {
	angular.module('myApp')

		.controller('peopleCtrl', function ($scope, $location, $state, userInfo, mainSvc) {

			$scope.currentUser = userInfo.currentUser;
			$scope.people = mainSvc.getPeople(userInfo.currentUser)
				.then(function (response) {
					$scope.list = response.data.people;
				});

			$scope.addPerson = function (input) {
				mainSvc.addNewPerson(input)
					.then(function (response) {
						var temp = {
							people: response.data._id
						};
						mainSvc.updateUser($scope.currentUser._id, temp);
						$state.reload();
					});
				$scope.modalToggle();
			};

			$scope.actions = function (input) {
				mainSvc.setPerson(input);
				mainSvc.setUsername($scope.currentUser.username);
				$state.go('list', {
					id: input._id
				});
			};


			/* ---------- show/hide modal ---------- */
			$scope.showModal = false;
			$scope.modalToggle = function () {
				$scope.showModal = !$scope.showModal;
			};

		}); // end peopleCtrl

})();