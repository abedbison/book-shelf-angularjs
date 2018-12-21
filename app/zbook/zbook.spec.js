describe('bsa.zbook module', function() {

  // load module
  beforeEach(module('bsa.zbook'));

  // // controller
  // describe('bsa.zbook controller', function() {

  //   it('should ....', inject(function($controller) {

  //     console.log($controller);
  //     //spec body
  //     var zbookCtrl = $controller('ZbookCtrl');
  //     // expect(zbookCtrl).toBeDefined();
  //   }));

  // });

  var $controller, $rootScope, $httpBackend;
  beforeEach(inject(function(_$controller_, _$rootScope_, _$httpBackend_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));

  describe('$scope.action', function() {
    it('should be view when loaded', function() {
      var $scope = $rootScope.$new();
      var backendAPI = $httpBackend;

      // var controller = $controller('ZbookCtrl', {});
      // var controller = $controller('ZbookCtrl', { $scope: $scope, BackendAPI:$httpBackend });
      // $scope.password = 'longerthaneightchars';
      // $scope.grade();
      // expect($scope.strength).toEqual('strong');
    });
  });

});