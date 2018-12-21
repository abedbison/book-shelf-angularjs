'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'bsa.znavbar',
  'bsa.zhome',
  'bsa.zbook',
  'bsa.zlibrary',
  'bsa.core.backendapi',
  'bsa.core.bookstatus',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
