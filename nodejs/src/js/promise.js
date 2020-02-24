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

function getBookById(id) {
  return new Promise((resolve, reject) => {
    const book = bookDB.find((book) => book.id === id);
    if (!book) {
      const error = new Error();
      error.message = 'Book not found';
      reject(error);
    }
    resolve(book);
  });
}
function getAuthorById(id) {
  return new Promise((resolve, reject) => {
    const author = authorsDb.find((author) => author.id === id);
    if (!author) {
      const error = new Error();
      error.message = 'Author not found';
      reject(error);
    }

    resolve(author);
  });
}

getBookById(1)
  .then((book) => {
    return getAuthorById(book.id);
  })
  .then((author) => {
    console.log(author);
  })
  .catch((error) => {
    console.log(error.message);
  });
