const bookDB = [
  {
    id: 1,
    title: 'clean Code',
    authorID: 1,
  },

  {
    id: 2,
    title: 'The pragmatic programer',
    authorID: 2,
  },
  {
    id: 3,
    title: 'web develper with Node JS',
    authorID: 3,
  },
];

const authorsDb = [
  {
    id: 1,
    name: 'Steve Fores',
  },
  {
    id: 2,
    name: 'Pablo Chars',
  },
];

function getBookById(id, callback) {
  const book = bookDB.find((book) => book.id === id);
  if (!book) {
    const error = new Error();
    error.message = 'Book not found';
    return callback(error);
  }

  callback(null, book);
}
function getAuthorById(id, callback) {
  const author = authorsDb.find((author) => author.id === id);
  if (!author) {
    const error = new Error();
    error.message = 'Author not found';
    return callback(error);
  }

  callback(null, author);
}

getBookById(2, (err, book) => {
  if (err) {
    return console.log(err.message);
  }

  getAuthorById(book.authorID, (err, author) => {
    if (err) {
      return console.log(err.message);
    }

    console.log('This book ' + book.title + ' was written by ' + author.name);
  });
  return console.log(book);
});
