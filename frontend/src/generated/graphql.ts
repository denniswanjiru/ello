import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']['output']>;
  coverPhotoURL?: Maybe<Scalars['String']['output']>;
  readingLevel?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBookToReadingList?: Maybe<Book>;
  removeBookFromReadingList?: Maybe<Book>;
};


export type MutationAddBookToReadingListArgs = {
  title: Scalars['String']['input'];
};


export type MutationRemoveBookFromReadingListArgs = {
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  readingList?: Maybe<Array<Maybe<Book>>>;
  searchBooks?: Maybe<Array<Maybe<Book>>>;
};


export type QuerySearchBooksArgs = {
  title: Scalars['String']['input'];
};

export type AddBookToReadingListMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type AddBookToReadingListMutation = { __typename?: 'Mutation', addBookToReadingList?: { __typename?: 'Book', author?: string | null, title?: string | null, coverPhotoURL?: string | null, readingLevel?: string | null } | null };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', author?: string | null, title?: string | null, coverPhotoURL?: string | null, readingLevel?: string | null } | null> | null };


export const AddBookToReadingListDocument = gql`
    mutation AddBookToReadingList($title: String!) {
  addBookToReadingList(title: $title) {
    author
    title
    coverPhotoURL
    readingLevel
  }
}
    `;
export type AddBookToReadingListMutationFn = Apollo.MutationFunction<AddBookToReadingListMutation, AddBookToReadingListMutationVariables>;

/**
 * __useAddBookToReadingListMutation__
 *
 * To run a mutation, you first call `useAddBookToReadingListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookToReadingListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookToReadingListMutation, { data, loading, error }] = useAddBookToReadingListMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAddBookToReadingListMutation(baseOptions?: Apollo.MutationHookOptions<AddBookToReadingListMutation, AddBookToReadingListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBookToReadingListMutation, AddBookToReadingListMutationVariables>(AddBookToReadingListDocument, options);
      }
export type AddBookToReadingListMutationHookResult = ReturnType<typeof useAddBookToReadingListMutation>;
export type AddBookToReadingListMutationResult = Apollo.MutationResult<AddBookToReadingListMutation>;
export type AddBookToReadingListMutationOptions = Apollo.BaseMutationOptions<AddBookToReadingListMutation, AddBookToReadingListMutationVariables>;
export const GetBooksDocument = gql`
    query GetBooks {
  books {
    author
    title
    coverPhotoURL
    readingLevel
  }
}
    `;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export function useGetBooksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksSuspenseQueryHookResult = ReturnType<typeof useGetBooksSuspenseQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;