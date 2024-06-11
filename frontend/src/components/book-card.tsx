import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { Button, ButtonProps, CardMedia } from "@mui/material";
import { orange } from "@mui/material/colors";
import { Book } from "../generated/graphql";

const StyledButton = styled(Button)<ButtonProps & { danger?: boolean }>(
  ({ danger }) => ({
    backgroundColor: danger ? "red" : "",
    color: "white",
    marginTop: 3,
    borderRadius: "8px",
    height: "32px",
    fontWeight: "bold",
    fontSize: "!4px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: orange[700],
    },
  })
);

export default function BookCard({
  reading,
  book,
}: {
  reading?: boolean;
  book: Book;
}) {
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
              <StyledButton variant="contained" danger>
                Remove from list
              </StyledButton>
            ) : (
              <StyledButton variant="contained">Add to list</StyledButton>
            )}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
