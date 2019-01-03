//TODO : create unit test
describe('bsa.zbook', function () {

  // load module
  beforeEach(module('bsa.zbook'));

  var ctrl, $controller, $rootScope, $httpBackend;

  beforeEach(inject(function ($componentController, _$controller_, _$rootScope_, _$httpBackend_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;

    console.log($httpBackend);

    ctrl = $componentController('bsa.zbook');

    // $httpBackend.except('/book').respond([]);
  }));

  describe('ZbookService', function () {

  });

  describe('ZbookCtrl', function () {


    // it('should has an empty book', function() {
    // var $scope = $rootScope.$new();
    // var controller = $controller('ZbookCtrl', { $scope: $scope, BackendAPI:$httpBackend });

    // var controller = $controller('ZbookCtrl', {});
    // var controller = $controller('ZbookCtrl', { $scope: $scope, BackendAPI:$httpBackend });
    // $scope.password = 'longerthaneightchars';
    // $scope.grade();
    // expect($scope.strength).toEqual('strong');
    // });
  });

});