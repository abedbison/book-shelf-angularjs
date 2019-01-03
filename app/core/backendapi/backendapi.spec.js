// TODO : create unit test
'use strict';

describe('BackendAPI', function() {

  var $httpBackend;
  var BackendAPI;
  var bookData = [
    {name: 'Book 1'},
    {name: 'Book 2'}
  ];

  var shelfData = [
    {maxCapacity: 2, currentCapacity: 2, book: bookData}
  ]

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `BackendAPI` service before each test
  beforeEach(module('bsa.core.backendapi'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _BackendAPI_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://localhost:8080/book/').respond(bookData);

    BackendAPI = _BackendAPI_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  // it('should fetch data from API get all books', function() {
  //   var books = BackendAPI.getAllBooks();

  // //   console.log(books);

  // //   // expect(books).toEqual([]);

  //   $httpBackend.flush();
  // //   // expect(books).toEqual(bookData);
  // });

});
