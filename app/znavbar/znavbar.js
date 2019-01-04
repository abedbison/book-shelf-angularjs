'use strict';

angular.module('bsa.znavbar', ['ngRoute'])

  .directive('znavbar', function () {
    return {
      templateUrl: 'znavbar/znavbar.html',
      controller: 'ZnavbarCtrl'
    };
  })


  .controller('ZnavbarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.location = $location;
  }]);