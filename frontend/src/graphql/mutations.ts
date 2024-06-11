import { gql } from "@apollo/client";

export const ADD_BOOK_TO_LIST = gql`
  mutation AddBookToReadingList($title: String!, $author: String!) {
    addBookToReadingList(title: $title, author: $author) {
      author
      title
      coverPhotoURL
      readingLevel
    }
  }
`;

export const REMOVE_BOOK_FROM_LIST = gql`
  mutation RemoveBookFromReadingList($title: String!, $author: String!) {
    removeBookFromReadingList(title: $title, author: $author) {
      author
      title
      coverPhotoURL
      readingLevel
    }
  }
`;
