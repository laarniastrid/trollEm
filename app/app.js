angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
	.state('main', {
		url: '/',
		templateUrl: '',
		controller: 'mainCtrl'
	})
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
        userInfo: function(mainSvc) {
          return mainSvc.getUser();
        }
      }
    })
    .state('list', {
      url: '/list/:id',
      templateUrl: '../html/list/list.html',
      controller: 'listCtrl',
      resolve: {
        personInfo: function(mainSvc) {
          return mainSvc.getPerson();
        },
        personActions: function(mainSvc, $stateParams) {
          if ($stateParams.id) {
            return mainSvc.getActions($stateParams.id);
          }
        }
      }
    });

    $urlRouterProvider.otherwise('/login');
}); // end config
