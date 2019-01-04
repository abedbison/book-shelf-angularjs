//TODO : create unit test
describe('bsa.zbook', function () {

  // load module
  beforeEach(module('bsa.zbook'));

  var ctrl, $controller, $rootScope, $httpBackend;

  beforeEach(inject(function (_$controller_, _$rootScope_, _$httpBackend_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;

    console.log($controller);
    // ctrl = $componentController('bsa.zbook');
    // $httpBackend.except('/book').respond([]);

  }));

  describe('ZbookService', function () {
    it('should ...', function() {

      expect(null).toBeNull();
    });
  });

  describe('ZbookCtrl', function () {


    // it('should ...', function() {
    // var $scope = $rootScope.$new();
    // var controller = $controller('ZbookCtrl', { $scope: $scope, BackendAPI:$httpBackend });
    // });
  });

});