import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import BookCard from "../../components/book-card";
import { Book } from "../../generated/graphql";
import { GET_READING_LIST } from "../../graphql/queries";

export default function ReadingList() {
  const { error, data } = useQuery(GET_READING_LIST);

  // using !data and !error in place of loading
  // to avoid race - condition bugs
  if (!error && !data) return <div>Loading</div>;

  if (error) return <div>Something went wrong</div>;

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
