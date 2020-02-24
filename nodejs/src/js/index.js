function greet(name) {
  console.log('Hi' + ' ' + name);
}

let hola = greet('Spyro');
console.log(hola);

setTimeout(function() {
  console.log('hola mundo'), 2000;
});

function calculate(n1, n2) {
  return n1 + n2;
}

let resultado = calculate(2, 8);

console.log(resultado);

let bookDB = [
  {
    id: 1,
    title: 'Clean Code',
  },
  {
    id: 2,
    title: 'The pragmantic programmer',
  },
  {
    id: 3,
    title: 'web Development with Node.js',
  },
];

function getBookByID(id, callback) {
  let book = bookDB.find((book) => book.id === id);
}

if (!book) {
  let error = new Error();
  error.message = 'Book not found!';
  return callback(error);
}

callback(null, book);

getBookByID(2, (err, book));
