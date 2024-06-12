import { Box, Typography } from "@mui/material";
import { Book } from "../generated/graphql";
import { StyledButton } from "./ui/styled-button";

export default function SearchResult({ book }: { book: Book }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={2}
    >
      <Box
        alignItems="center"
        display="flex"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box display={{ xs: "none", sm: "block" }}>
          <img
            src={"/" + book.coverPhotoURL}
            alt=""
            height="60px"
            width="60px"
            style={{ borderRadius: "10px" }}
          />
        </Box>

        <Box px={{ xs: 0, sm: 2 }} lineHeight="5px" mr={3}>
          <Typography
            fontSize={{ xs: "16px", sm: "20px" }}
            variant="h5"
            fontWeight="bold"
          >
            {book.title}
          </Typography>

          <Box display="flex" alignItems="center" columnGap="16px">
            <Typography>{book.author}</Typography>

            <Box
              display="flex"
              width="5px"
              height="5px"
              borderRadius="50%"
              mt="2px"
              bgcolor="#000"
            />

            <Typography>Level: {book.readingLevel}</Typography>
          </Box>
        </Box>
      </Box>

      <StyledButton variant="contained">Add</StyledButton>
    </Box>
  );
}
