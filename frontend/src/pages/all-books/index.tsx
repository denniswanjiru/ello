import { useQuery } from "@apollo/client";
import { Box, CircularProgress, Grid } from "@mui/material";
import BookCard from "../../components/book-card";
import { Book } from "../../generated/graphql";
import { GET_BOOKS } from "../../graphql/queries";

export default function AllBooks() {
  const { error, data } = useQuery(GET_BOOKS);

  // using !data and !error in place of loading
  // to avoid race - condition bugs
  if (!error && !data) {
    return (
      <Box display="grid" sx={{ placeItems: "center", mt: 20 }}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (error) return <div>Something went wrong</div>;

  return (
    <Grid container spacing={6}>
      {data.books.map((book: Book) => (
        <Grid
          key={JSON.stringify(book) + new Date().toLocaleString()}
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
