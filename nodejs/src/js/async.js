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

async function getBookById(id) {
  const book = bookDB.find((book) => book.id === id);
  if (!book) {
    const error = new Error();
    error.message = 'Book not found';
    throw error;
  }
  return book;
}
async function getAuthorById(id) {
  const author = authorsDb.find((author) => author.id === id);
  if (!author) {
    const error = new Error();
    error.message = 'Author not found';
    throw error;
  }
  return author;
}

async function main() {
  try {
    const book = await getBookById(5);
    const author = await getAuthorById(book.authorID);
    console.log('This book ' + book.title + ' was written by ' + author.name);
  } catch {
    console.log(ex.message);
  }
}

main();
