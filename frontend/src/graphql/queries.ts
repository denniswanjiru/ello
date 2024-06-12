import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      title
      coverPhotoURL
      readingLevel
    }
  }
`;

export const GET_READING_LIST = gql`
  query ReadingList {
    readingList {
      author
      title
      coverPhotoURL
      readingLevel
    }
  }
`;

export const SEARCH_BOOK = gql`
  query SearchBook($title: String!) {
    searchBooks(title: $title) {
      author
      title
      readingLevel
      coverPhotoURL
    }
  }
`;
