'use strict';

import { element } from "protractor";

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('book-shelf-angular', function () {

  // well 1 problem solved
  it('should automatically redirect to /home when location hash/fragment is empty', function () {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  // well time to write anything
  describe('Book', function () {

    beforeEach(function () {
      browser.get('index.html#!/book');
    });

    it('should display books on title when opened', function() {
      // var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
      element(by.binding('title')).getText().then(function(name) {
        expect(name).toBe('Foo');
      });
    })


    // it('should render view1 when user navigates to /view1', function () {
    //   expect(element.all(by.css('[ng-view] p')).first().getText()).
    //     toMatch(/partial for view 1/);
    // });

  });


  describe('view2', function () {

    beforeEach(function () {
      browser.get('index.html#!/view2');
    });


    it('should render view2 when user navigates to /view2', function () {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
