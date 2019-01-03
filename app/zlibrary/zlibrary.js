'use strict';

angular.module('bsa.zlibrary', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/library', {
      templateUrl: 'zlibrary/zlibrary.html',
      controller: 'ZlibraryCtrl'
    });
  }])

  .controller('ZlibraryCtrl', ['$scope', 'BackendAPI', function ($scope, BackendAPI) {
    var dummyshelf = {
      'id': 0,
      'maxCapacity': 1,
      'currentCapacity': 0,
      "book": []
    };

    var librarypayload = {
      'bookId': 0,
      'shelfId': 0
    }

    $scope.editShelf = function (id) {
      $scope.shelf = angular.copy($scope.books.find(x => x.id === id));
      $scope.changeMode('edit');
    }

    $scope.newShelf = function () {
      $scope.shelf = dummyshelf;
      $scope.changeMode('new');
    }

    $scope.saveShelf = function () {
      if ($scope.formshelf.$valid) {

        BackendAPI.postShelf($scope.shelf).$promise.then(function (data) {
          if (data.id) {
            // alert('your data is saved  '); // TODO : make it more user friendly
          }
          $scope.refreshPage()
        }, function (error) {
          alert("something went wrong with the API...");
        });
      } else {
        alert('please check your form'); // TODO : make it more user friendly
      }
    }

    $scope.viewShelf = function () {
      $scope.changeMode('view');
    }

    $scope.findBook = function (id) {
      librarypayload.shelfId = id;
      BackendAPI.getAllBooks().$promise.then(function (data) {
        $scope.changeMode('findbook');
        $scope.books = data.filter(function (book) {
          return book.status === 'NOT_SHELVED';
        });
      })
    }

    $scope.addBook = function (id) {
      librarypayload.bookId = id;
      BackendAPI.addBook(librarypayload).$promise.then(function (data) {
        // var message = (data.message) ? data.message : 'something went wrong';
        // alert(data.message);
        $scope.refreshPage();
      }, function (error) {
        alert("something went wrong with the API...");
      });
    }

    $scope.removeBook = function (bookId, shelfId) {
      librarypayload.bookId = bookId;
      librarypayload.shelfId = shelfId;
      BackendAPI.removeBook(librarypayload).$promise.then(function (data) {
        // var message = (data.message) ? data.message : 'something went wrong';
        // alert(data.message);
        $scope.refreshPage();
      }, function (error) {
        alert("something went wrong with the API...");
      });
    }

    $scope.refreshPage = function () {
      BackendAPI.getAllShelves().$promise.then(function (data) {
        $scope.shelves = data;
      }, function (error) {
        alert("something went wrong with the API...");
      });
      $scope.changeMode('view');
    }

    $scope.changeMode = function (mode) {
      switch (mode) {
        case 'new':
          $scope.action = 'new';
          $scope.title = 'New Shelf';
          break;
        case 'edit':
          $scope.action = 'edit';
          $scope.title = 'Edit Shelf ' + $scope.shelf.ud;
          break;
        case 'view':
          $scope.action = 'view';
          $scope.title = 'View Shelves';
          break;
        case 'findbook':
          $scope.action = 'findbook';
          $scope.title = 'Add Book to Shelf #' + (librarypayload.shelfId + 1);
          break;
      }
    }

    $scope.currentView = function (action) {
      return $scope.action == action;
    }


    $scope.refreshPage();

  }]);