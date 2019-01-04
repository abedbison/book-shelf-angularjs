'use strict';

describe('bsa.znavbar', function () {

    // load the module
    beforeEach(module('bsa.znavbar'));

    var $controller, $rootScope, $location;
    beforeEach(inject(function (_$controller_, _$rootScope_, _$location_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $location = _$location_;
    }));

    describe('ZnavbarCtrl', function () {

        it('should return an empty path', inject(function () {
            var $scope = $rootScope.$new();
            var controller = $controller('ZnavbarCtrl', { $scope: $scope, $location: $location });

            expect($scope.location.path()).toEqual('');
        }));


    });

});
