'use strict';

angular.module('bsa.zbook', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/book', {
      templateUrl: 'zbook/zbook.html',
      controller: 'ZbookCtrl'
    });
  }])

  .service('ZbookService', function () {
    const self = this;
    const dummybook = {
      'id': '0',
      'isbn': '',
      'title': '',
      "author": '',
      "status": 'NOT_SHELVED'
    };

    self.dummydata = angular.copy(dummybook);
  })

  .controller('ZbookCtrl', ['$scope', 'BackendAPI', 'ZbookService', function ($scope, BackendAPI, ZbookService) {

    $scope.editBook = function (id) {
      $scope.book = angular.copy($scope.books.find(x => x.id === id));
      $scope.changeMode('edit');
    }

    $scope.newBook = function () {
      $scope.book = ZbookService.dummydata;
      $scope.changeMode('new');
    }

    $scope.viewBook = function () {
      $scope.changeMode('view');
    }

    $scope.saveBook = function () {
      if ($scope.formbook.$valid) {

        BackendAPI.postBook($scope.book).$promise.then(function (data) {
          if (data.id) {
            // alert('your data is saved ');
          }
          $scope.refreshPage()
        }, function (error) {
          alert("something went wrong with the API...");
        });
      } else {
        alert('please check your form'); // TODO : make it more user friendly
      }
    }

    $scope.refreshPage = function () {
      BackendAPI.getAllBooks().$promise.then(function (data) {
        $scope.books = data;
      }, function (error) {
        alert("something went wrong with the API...");
      });
      $scope.changeMode('view');
    }

    $scope.changeMode = function (mode) {
      switch (mode) {
        case 'new':
          $scope.action = 'new';
          $scope.title = 'New Book';
          break;
        case 'edit':
          $scope.action = 'edit';
          $scope.title = 'Edit ' + $scope.book.title;
          break;
        case 'view':
          $scope.action = 'view';
          $scope.title = 'View Books';
          break;
      }
    }

    $scope.currentView = function (action) {
      return $scope.action == action;
    }

    $scope.refreshPage();
    $scope.booksOrderBy = 'isbn';
    $scope.book = ZbookService.dummydata; // some dummy book

  }]);