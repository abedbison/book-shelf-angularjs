'use strict';

angular.
  module('bsa.core.bookstatus', []).
  filter('bookstatus', function() {
    return function(input) {
      return (input == 'SHELVED') ? 'Shelved' : 'Not Shelved';
    };
  });
