'use strict';

import { element } from "protractor";

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('book-shelf-angularjs', function () {

  it('should automatically redirect to /home when location hash/fragment is empty', function () {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('home', function() {
    beforeEach(function () {
      browser.get('index.html#!/home');
    });

    it('should display a jumbotroon', function (){

    });
    
  });

  describe('book', function () {

    beforeEach(function () {
      browser.get('index.html#!/book');
    });

    it('should display list of books when page is opened', function() {
      element(by.binding('title')).getText().then(function(name) {
        // expect(name).toBe('Foo');
      });
    })

  });


  describe('library', function () {

    beforeEach(function () {
      browser.get('index.html#!/library');
    });


    // it('should render view2 when user navigates to /view2', function () {
    //   expect(element.all(by.css('[ng-view] p')).first().getText()).
    //     toMatch(/partial for view 2/);
    // });

  });
});
