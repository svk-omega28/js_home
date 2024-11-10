'use strict';

import PrintedBook from './PrintedBook.js';
import Ebook from './Ebook.js';

const printedBook = new PrintedBook('React и обработка форм через Formik', 'Владимир Шайтан', 2023, 666);
console.log(printedBook.info);
console.log(printedBook.getDescription());

const ebook = new Ebook('Работа со шрифтами в вебе', 'Елизавета Усова', 2024, 2);
console.log(ebook.info);
console.log(ebook.getDescription());
