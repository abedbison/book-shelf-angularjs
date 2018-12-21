'use strict';

angular.module('bsa.core.backendapi', ['ngResource'])
  .factory('BackendAPI', ['$resource',
    function ($resource) {
      return $resource('http://localhost:8080/:restparam/:anotherparam', {
        restparam: '',
        anotherparam: ''
      }, {
          getAllBooks: {
            method: 'GET',
            params: { restparam: 'book' },
            isArray: true
          },
          postBook: {
            method: 'POST',
            params: { restparam: 'book' },
            cache: false,
            isArray: false,
          },
          getAllShelves: {
            method: 'GET',
            params: { restparam: 'library' },
            isArray: true
          },
          postShelf: {
            method: 'POST',
            params: { restparam: 'library' },
            cache: false,
            isArray: false,
          },
          addBook: {
            method: 'POST',
            params: { restparam: 'library', anotherparam: 'addbook' },
            cache: false,
            isArray: false,
          },
          removeBook: {
            method: 'POST',
            params: { restparam: 'library', anotherparam: 'removebook' },
            cache: false,
            isArray: false,
          }
        });
    }
  ])