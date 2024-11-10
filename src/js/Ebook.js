'use strict';

import Book from './Book.js';

(function () {
  class Ebook extends Book {
    constructor(title, author, year, fileSize) {
      super(title, author, year);
      this._fileSize = fileSize;
    }

    get fileSize() {
      return this._fileSize;
    }

    set fileSize(value) {
      if (typeof value === 'number' && value > 0) {
        this._fileSize = value;
      } else {
        console.error('File size must be a positive number');
      }
    }

    get info() {
      return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}, File Size: ${this._fileSize}MB`;
    }

    getDescription() {
      return `${super.getDescription()} File size is ${this._fileSize} MB.`;
    }
  }

  window.Ebook = Ebook;
}());

export default Ebook;
