'use strict';

import Book from './Book.js';

(function () {
  class PrintedBook extends Book {
    constructor(title, author, year, pageCount) {
      super(title, author, year);
      this._pageCount = pageCount;
    }

    get pageCount() {
      return this._pageCount;
    }

    set pageCount(value) {
      if (typeof value === 'number' && value > 0) {
        this._pageCount = value;
      } else {
        console.error('Page count must be a positive number');
      }
    }

    get info() {
      return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}, Pages: ${this._pageCount}`;
    }

    getDescription() {
      return `${super.getDescription()} It has ${this._pageCount} pages.`;
    }
  }

  window.PrintedBook = PrintedBook;
}());

export default PrintedBook;
