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
