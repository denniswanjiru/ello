import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useMutation } from "@apollo/client";
import { CardMedia } from "@mui/material";
import { Book } from "../generated/graphql";
import { ADD_BOOK_TO_LIST, REMOVE_BOOK_FROM_LIST } from "../graphql/mutations";
import { GET_BOOKS, GET_READING_LIST } from "../graphql/queries";
import { StyledButton } from "./ui/styled-button";

export default function BookCard({
  reading,
  book,
}: {
  reading?: boolean;
  book: Book;
}) {
  const [addBookToList, { loading }] = useMutation(ADD_BOOK_TO_LIST, {
    refetchQueries: [GET_BOOKS, GET_READING_LIST],
  });

  const [removeBookFromList, { loading: removingBook }] = useMutation(
    REMOVE_BOOK_FROM_LIST,
    {
      refetchQueries: [GET_BOOKS, GET_READING_LIST],
    }
  );

  const handleAddBookToList = async () => {
    try {
      await addBookToList({
        variables: { title: book.title, author: book.author },
      });
      console.log("success!!");
    } catch (error) {
      console.log("Unable to add book to the reading list");
    }
  };

  const handleRemoveBookFromList = async () => {
    try {
      await removeBookFromList({
        variables: { title: book.title, author: book.author },
      });
      console.log("success removed!!");
    } catch (error) {
      console.log("Unable to remove book from the reading list");
    }
  };

  return (
    <Card sx={{ display: "flex", borderRadius: "10px" }}>
      <CardMedia
        component="img"
        sx={{ width: 144 }}
        image={"/" + book.coverPhotoURL}
        style={{ borderRadius: "10px" }}
        alt="Live from space album cover"
      />

      <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: 2 }}>
        <CardContent sx={{}}>
          <Typography component="div" variant="subtitle1">
            Level: {book.readingLevel}
          </Typography>

          <Typography
            component="div"
            variant="h5"
            fontWeight="bold"
            sx={{
              maxWidth: "265px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {book.title}
          </Typography>

          <Typography color="text.secondary" component="p" fontSize={18}>
            {book.author}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", pt: 1 }}>
            {reading ? (
              <StyledButton
                danger
                variant="contained"
                disabled={removingBook}
                onClick={handleRemoveBookFromList}
              >
                Remove from list
              </StyledButton>
            ) : (
              <StyledButton
                onClick={handleAddBookToList}
                variant="contained"
                disabled={loading}
              >
                Add to list
              </StyledButton>
            )}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
