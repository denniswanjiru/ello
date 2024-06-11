import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import BookCard from "../../components/book-card";
import { Book } from "../../generated/graphql";
import { GET_BOOKS } from "../../graphql/queries";

export default function AllBooks() {
  const { error, data } = useQuery(GET_BOOKS);

  if (!error && !data) return <div>Loading</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <Grid container spacing={6}>
      {data.books.map((book: Book, idx: number) => (
        <Grid
          key={book?.title ?? "" + book?.coverPhotoURL + idx}
          item
          xs={12}
          md={6}
          lg={4}
        >
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
}
