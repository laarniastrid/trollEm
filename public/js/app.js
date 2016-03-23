angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: './views/login.html',
      controller: 'mainCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'signup.html',
      controller: 'mainCtrl'
    })
    .state('people', {
      url: '/people',
      templateUrl: './views/people.html',
      controller: 'peopleCtrl'
    })
    .state('list', {
      url: '/list',
      templateUrl: './views/list.html',
      controller: 'listCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: '/views/admin.html',
      controller: 'mainCtrl'
    });

    $urlRouterProvider.otherwise('/');
}); // end confif
