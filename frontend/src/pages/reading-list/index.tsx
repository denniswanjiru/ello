import { Grid } from "@mui/material";
import BookCard from "../../components/book-card";

export default function ReadingList() {
  return (
    <Grid container spacing={6}>
      {[1, 2, 3, 4, 5].map((idx) => (
        <Grid key={idx} item xs={12} md={6} lg={4}>
          <BookCard reading book={{}} />
        </Grid>
      ))}
    </Grid>
  );
}
