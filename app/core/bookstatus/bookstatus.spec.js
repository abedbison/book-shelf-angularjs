describe('bookstatus', function() {

    // load the module
    beforeEach(module('bsa.core.bookstatus'));
  
    // describe the test
    it('should convert enumerated status from BACKEND Service',
      inject(function(bookstatusFilter) {
        expect(bookstatusFilter('SHELVED')).toBe('Shelved');
        expect(bookstatusFilter('NOT_SHELVED')).toBe('Not Shelved');
      })
    );
  
  });