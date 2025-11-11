const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

// const longBooks = books.filter((book) => book.pages > 300);

// const longBooksTitles = longBooks.map((bookTitle) => bookTitle.title);

// for (let i = 0; i < longBooks.length; i++) {
//   console.log(longBooksTitles[i]);
// }

// -------------

// const availableBooks = books.filter((book) => book.available === true);

// // console.log(availableBooks);

// const discountedBooks = availableBooks.map((book) => {
//   const prezzoOriginale = parseFloat(book.price.replace("€", ""));
//   const prezzoScontato = prezzoOriginale * 0.8;
//   const prezzoFinale = prezzoScontato.toFixed(2) + "€";
//   return { ...book, price: prezzoFinale };
// });

// console.log(discountedBooks);

// const fullPricedBook = discountedBooks.find((Element) => {
//   const prezzoNumero = parseFloat(Element.price.replace("€", ""));
//   return Number.isInteger(prezzoNumero);
// });

// console.log(fullPricedBook);

// -----------

// const authors = books.map((book) => book.author);
// authors.sort((a, b) => b.age - a.age);

// console.log(authors);

// const areAuthorsAdults = authors.every((author) => author.age > 18);

// console.log(areAuthorsAdults);

// ------------------

const ages = books.map((a) => a.author.age);

console.log(ages);

const ageSum = ages.reduce((acc, numero) => {
  return acc + numero;
}, 0);
console.log(ageSum);

const agesAvg = ageSum / ages.length;
console.log(`L'età media degli autori è: ${agesAvg}`);
