/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

//Book 1
const Book1 = new Book(
  "Marc",
  "The Life of Marc",
  "01.01.2022",
  205,
  false
);

const Book2 = new Book(
  "Kim",
  "The Life of Kim",
  "02.10.2020",
  350,
  false
);

const Book3 = new Book(
  "Martin Buch",
  "Das Buch von Martin",
  "01.01.2020",
  10,
  true
);

const Book4 = new Book(
  "Bücherautor",
  "Das Buch ohne Autor",
  "01.01.2050",
  20,
  false
);

const Book5 = new Book(
  "Martin Beispiel",
  "Das Beispielbuch",
  "02.02.2022",
  60,
  true
);

console.log("The new Books:", Book1);
console.log("The new Books:", Book2);
console.log("The new Books:", Book3);
console.log("The new Books:", Book4);
console.log("The new Books:", Book5);

Book5.alreadyRead(false);
console.log("The new Books:", Book5);