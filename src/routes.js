var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $routeProvider
  .when('/', {
    templateUrl: './components/members/members.html',
    controller: 'allMembersController',
    restricted: false
  })
  .when('/profile', {
    templateUrl: './components/profile/profile.html',
    controller: 'showProfileController'
  })
  .otherwise({redirectTo: '/'});
});