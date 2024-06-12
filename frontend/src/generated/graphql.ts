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
  author: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationRemoveBookFromReadingListArgs = {
  author: Scalars['String']['input'];
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
  author: Scalars['String']['input'];
}>;


export type AddBookToReadingListMutation = { __typename?: 'Mutation', addBookToReadingList?: { __typename?: 'Book', author?: string | null, title?: string | null, coverPhotoURL?: string | null, readingLevel?: string | null } | null };

export type RemoveBookFromReadingListMutationVariables = Exact<{
  title: Scalars['String']['input'];
  author: Scalars['String']['input'];
}>;


export type RemoveBookFromReadingListMutation = { __typename?: 'Mutation', removeBookFromReadingList?: { __typename?: 'Book', author?: string | null, title?: string | null, coverPhotoURL?: string | null, readingLevel?: string | null } | null };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', author?: string | null, title?: string | null, coverPhotoURL?: string | null, readingLevel?: string | null } | null> | null };

export type ReadingListQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadingListQuery = { __typename?: 'Query', readingList?: Array<{ __typename?: 'Book', author?: string | null, title?: string | null, coverPhotoURL?: string | null, readingLevel?: string | null } | null> | null };

export type SearchBookQueryVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type SearchBookQuery = { __typename?: 'Query', searchBooks?: Array<{ __typename?: 'Book', author?: string | null, title?: string | null, readingLevel?: string | null, coverPhotoURL?: string | null } | null> | null };


export const AddBookToReadingListDocument = gql`
    mutation AddBookToReadingList($title: String!, $author: String!) {
  addBookToReadingList(title: $title, author: $author) {
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
 *      author: // value for 'author'
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
export const RemoveBookFromReadingListDocument = gql`
    mutation RemoveBookFromReadingList($title: String!, $author: String!) {
  removeBookFromReadingList(title: $title, author: $author) {
    author
    title
    coverPhotoURL
    readingLevel
  }
}
    `;
export type RemoveBookFromReadingListMutationFn = Apollo.MutationFunction<RemoveBookFromReadingListMutation, RemoveBookFromReadingListMutationVariables>;

/**
 * __useRemoveBookFromReadingListMutation__
 *
 * To run a mutation, you first call `useRemoveBookFromReadingListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBookFromReadingListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBookFromReadingListMutation, { data, loading, error }] = useRemoveBookFromReadingListMutation({
 *   variables: {
 *      title: // value for 'title'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useRemoveBookFromReadingListMutation(baseOptions?: Apollo.MutationHookOptions<RemoveBookFromReadingListMutation, RemoveBookFromReadingListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveBookFromReadingListMutation, RemoveBookFromReadingListMutationVariables>(RemoveBookFromReadingListDocument, options);
      }
export type RemoveBookFromReadingListMutationHookResult = ReturnType<typeof useRemoveBookFromReadingListMutation>;
export type RemoveBookFromReadingListMutationResult = Apollo.MutationResult<RemoveBookFromReadingListMutation>;
export type RemoveBookFromReadingListMutationOptions = Apollo.BaseMutationOptions<RemoveBookFromReadingListMutation, RemoveBookFromReadingListMutationVariables>;
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
export const ReadingListDocument = gql`
    query ReadingList {
  readingList {
    author
    title
    coverPhotoURL
    readingLevel
  }
}
    `;

/**
 * __useReadingListQuery__
 *
 * To run a query within a React component, call `useReadingListQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadingListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadingListQuery({
 *   variables: {
 *   },
 * });
 */
export function useReadingListQuery(baseOptions?: Apollo.QueryHookOptions<ReadingListQuery, ReadingListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReadingListQuery, ReadingListQueryVariables>(ReadingListDocument, options);
      }
export function useReadingListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadingListQuery, ReadingListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReadingListQuery, ReadingListQueryVariables>(ReadingListDocument, options);
        }
export function useReadingListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReadingListQuery, ReadingListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReadingListQuery, ReadingListQueryVariables>(ReadingListDocument, options);
        }
export type ReadingListQueryHookResult = ReturnType<typeof useReadingListQuery>;
export type ReadingListLazyQueryHookResult = ReturnType<typeof useReadingListLazyQuery>;
export type ReadingListSuspenseQueryHookResult = ReturnType<typeof useReadingListSuspenseQuery>;
export type ReadingListQueryResult = Apollo.QueryResult<ReadingListQuery, ReadingListQueryVariables>;
export const SearchBookDocument = gql`
    query SearchBook($title: String!) {
  searchBooks(title: $title) {
    author
    title
    readingLevel
    coverPhotoURL
  }
}
    `;

/**
 * __useSearchBookQuery__
 *
 * To run a query within a React component, call `useSearchBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBookQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSearchBookQuery(baseOptions: Apollo.QueryHookOptions<SearchBookQuery, SearchBookQueryVariables> & ({ variables: SearchBookQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchBookQuery, SearchBookQueryVariables>(SearchBookDocument, options);
      }
export function useSearchBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchBookQuery, SearchBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchBookQuery, SearchBookQueryVariables>(SearchBookDocument, options);
        }
export function useSearchBookSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchBookQuery, SearchBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchBookQuery, SearchBookQueryVariables>(SearchBookDocument, options);
        }
export type SearchBookQueryHookResult = ReturnType<typeof useSearchBookQuery>;
export type SearchBookLazyQueryHookResult = ReturnType<typeof useSearchBookLazyQuery>;
export type SearchBookSuspenseQueryHookResult = ReturnType<typeof useSearchBookSuspenseQuery>;
export type SearchBookQueryResult = Apollo.QueryResult<SearchBookQuery, SearchBookQueryVariables>;