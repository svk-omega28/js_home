'use strict';

(function () {
  class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this._year = year;
    }

    get year() {
      return this._year;
    }

    set year(value) {
      if (typeof value === 'number') {
        this._year = value;
      } else {
        console.error('Year must be a number');
      }
    }

    get info() {
      return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}`;
    }

    getDescription() {
      return `This is a book titled '${this.title}' by ${this.author}.`;
    }
  }

  window.Book = Book;
}());

export default Book;
