'use strict';

angular.module('bsa.znavbar', ['ngRoute'])

  .directive('znavbar', function () {
    // TODO : define the active menu item in html
    return {
      templateUrl: 'znavbar/znavbar.html',
      controller: 'ZnavbarCtrl'
    };
  })


  .controller('ZnavbarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.location = $location;
    // $scope.location = $location;
    // $scope.$route = $route;
  }]);