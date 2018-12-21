// TODO : create test
'use strict';

describe('BackendAPI', function() {

  var $httpBackend;
  var BackendAPI;
  var phonesData = [
    {name: 'Phone X'},
    {name: 'Phone Y'},
    {name: 'Phone Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `BackendAPI` service before each test
  beforeEach(module('bsa.core.backendapi'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _BackendAPI_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/phones.json').respond(phonesData);

    BackendAPI = _BackendAPI_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

//   it('should fetch the phones data from `/phones/phones.json`', function() {
//     var phones = Phone.query();

//     expect(phones).toEqual([]);

//     $httpBackend.flush();
//     expect(phones).toEqual(phonesData);
//   });

});
