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
  },
};
