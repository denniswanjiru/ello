import { useQuery } from "@apollo/client";
import { Box, Grid, Typography } from "@mui/material";
import BookCard from "../../components/book-card";
import { Book } from "../../generated/graphql";
import { GET_READING_LIST } from "../../graphql/queries";

export default function ReadingList() {
  const { error, data } = useQuery(GET_READING_LIST);

  // using !data and !error in place of loading
  // to avoid race - condition bugs
  if (!error && !data) return <div>Loading</div>;

  if (error) return <div>Something went wrong</div>;

  if (!data.readingList.length) {
    return (
      <Box display="grid" sx={{ placeItems: "center", mt: 14 }}>
        <img src="/assets/empty.png" alt="empty reading list" />

        <Typography variant="h5" fontWeight="bold" color="#919EAB">
          No books to display
        </Typography>

        <Typography color="#919EAB">
          Oops! Seems like there are no books in the reading list.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={6}>
      {data.readingList.map((book: Book) => (
        <Grid
          key={JSON.stringify(book) + new Date().toLocaleString()}
          item
          xs={12}
          md={6}
          lg={4}
        >
          <BookCard reading book={book} />
        </Grid>
      ))}
    </Grid>
  );
}
