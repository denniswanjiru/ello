import { gql } from "@apollo/client";

export const ADD_BOOK_TO_LIST = gql`
  mutation AddBookToReadingList($title: String!) {
    addBookToReadingList(title: $title) {
      author
      title
      coverPhotoURL
      readingLevel
    }
  }
`;

export const REMOVE_BOOK_FROM_LIST = gql`
  mutation RemoveBookFromReadingList($title: String!) {
    removeBookFromReadingList(title: $title) {
      author
      title
      coverPhotoURL
      readingLevel
    }
  }
`;
