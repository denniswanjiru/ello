export const typeDefs = `#graphql
  type Book {
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
  }

  type Query {
    books: [Book]
    readingList: [Book]
    searchBooks(title: String!): [Book]
  }

  type Mutation {
    addBookToReadingList(title: String!): Book
    removeBookFromReadingList(title: String!): Book
  }
`;
