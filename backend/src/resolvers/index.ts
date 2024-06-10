import { booksData } from '../data/books';

type Book = {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
};

const readingList: Book[] = [];

export const resolvers = {
  Query: {
    books: () => booksData,
    readingList: () => readingList,
    searchBooks: (_: unknown, { title }: { title: string }) => {
      return booksData.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
    },
  },
  Mutation: {
    addBookToReadingList: (_: unknown, { title }: { title: string }) => {
      const book = booksData.find((book) => book.title === title);
      const alreadyAdded = !!readingList.find((bk) => bk.title === title);

      if (book && !alreadyAdded) {
        readingList.push(book);
      }

      return book;
    },
    removeBookFromReadingList: (_: unknown, { title }: { title: string }) => {
      const bookIndex = readingList.findIndex((book) => book.title === title);

      if (bookIndex !== -1) {
        const [removedBook] = readingList.splice(bookIndex, 1);
        return removedBook;
      }

      return null;
    },
  },
};
