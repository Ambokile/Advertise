// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


   var app = angular.module('add', ['ionic'])
   angular.module('add_1', ['ionic'])
   
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
 
 
var app_1 =  angular.module('home', ['ionic'])

app_1.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html',
   // controller: 'HomeCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'register.html',
   // controller: 'HomeCtrl'
  })
  
  $urlRouterProvider.otherwise("/");

})
app_1.controller('HomeCtrl', function($scope) {
  console.log('HomeCtrl');
});



   
   function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}

