// TODO : add test

'use strict';

describe('bsa.zhome', function() {

  beforeEach(module('bsa.zhome'));

  describe('ZhomeCtrl', function(){

    it('should have a foo in the scope', inject(function($controller) {
      var scope = {};
      var zhomeCtrl = $controller('ZhomeCtrl', {$scope: scope});
      // console.log(scope);
      // expect(zhomeCtrl).toBeDefined();

      expect(scope.foo).toBeDefined();
    }));

  });
});