// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

   var app = angular.module('add', ['ionic'])
   
var application = angular.module('ionicApp', ['ionic'])

application.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('info', {
    url: '/',
    templateUrl: 'info.html',
    controller: 'InfoCtrl'
  })
  .state('user', {
    url: '/user',
    templateUrl: 'add_user.html',
    controller: 'UserCtrl'
  })
  $urlRouterProvider.otherwise("/");

})

application.controller('InfoCtrl', function($scope) {
  console.log('InfoCtrl');
});
  angular.module('account', ['ionic'])
  angular.module('add_user', ['ionic'])
   angular.module('register', ['ionic'])

