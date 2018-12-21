'use strict';

angular.module('bsa.zbook', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/book', {
      templateUrl: 'zbook/zbook.html',
      controller: 'ZbookCtrl'
    });
  }])

  .controller('ZbookCtrl', ['$scope', 'BackendAPI', function ($scope, BackendAPI) {
    var dummybook = {
      'id': '0',
      'isbn': '', //"12345-6789-0000-1",
      'title': '', //"Javascript: The Good Part",
      "author": '', // "O'RLY",
      "status": 'NOT_SHELVED'
    };

    $scope.books = BackendAPI.getAllBooks();
    $scope.action = 'view';
    $scope.title = 'View Books';
    $scope.booksOrderBy = 'isbn';

    // some dummy book
    $scope.book = dummybook;

    $scope.editBook = function (id) {
      $scope.book = angular.copy($scope.books.find(x => x.id === id));
      $scope.changeMode('edit');
    }

    $scope.newBook = function () {
      $scope.book = angular.copy(dummybook);
      $scope.changeMode('new');
    }

    $scope.viewBook = function () {
      $scope.changeMode('view');
    }

    $scope.saveBook = function () {
      if($scope.formbook.$valid) {
        
        BackendAPI.postBook($scope.book).$promise.then(function(data) {
          if(data.id) {
            // alert('your data is saved  '); // TODO : make it more user friendly
          }
          $scope.refreshPage()
        });
      } else {
        alert('please check your form'); // TODO : make it more user friendly
      }
    }

    $scope.refreshPage = function () {
      BackendAPI.getAllBooks().$promise.then(function(data) {
        $scope.books = data;
      });
      $scope.changeMode('view');
    }

    $scope.changeMode = function (mode) {
      console.log(mode);
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

  }]);