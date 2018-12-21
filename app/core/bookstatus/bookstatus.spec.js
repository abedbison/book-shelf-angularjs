describe('bookstatus', function() {

    beforeEach(module('bsa.core.bookstatus'));
  
    it('should convert enumerated status',
      inject(function(bookstatusFilter) {
        expect(bookstatusFilter('SHELVED')).toBe('Shelved');
        expect(bookstatusFilter('NOT_SHELVED')).toBe('Not Shelved');
      })
    );
  
  });