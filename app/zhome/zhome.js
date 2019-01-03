'use strict';

angular.module('bsa.zhome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'zhome/zhome.html',
    controller: 'ZhomeCtrl'
  });
}])

.controller('ZhomeCtrl', ['$scope', function($scope) {
  $scope.foo = 'bar';
}]);