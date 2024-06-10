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
  }

  type Mutation {
    addBookToReadingList(title: String!): Book
  }
`;
