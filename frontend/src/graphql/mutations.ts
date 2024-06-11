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
