import { useLazyQuery } from "@apollo/client";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

import { Book } from "../../generated/graphql";
import { SEARCH_BOOK } from "../../graphql/queries";
import SearchResult from "../search-result";
import { style } from "./modal.style";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export default function SearchModal({ open, handleClose }: Props) {
  const [instantSearchQuery, setInstantSearchQuery] = useState<string>("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>("");
  const [searchBook, { data }] = useLazyQuery(SEARCH_BOOK);

  // Debounce function to set debounced search query
  const debouncedSetSearchQuery = useCallback(
    debounce((value: string) => {
      setDebouncedSearchQuery(value);
    }, 500),
    []
  );

  useEffect(() => {
    searchBook({ variables: { title: "" } });
  }, [searchBook]);

  // Effect to call the searchBook query when debouncedSearchQuery changes
  useEffect(() => {
    if (debouncedSearchQuery) {
      searchBook({ variables: { title: debouncedSearchQuery } });
    }
  }, [debouncedSearchQuery, searchBook]);

  // Handle change event for the input field
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInstantSearchQuery(value); // Update input field instantly
    debouncedSetSearchQuery(value); // Update debounced search query
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <TextField
          variant="outlined"
          placeholder="Search by title"
          fullWidth
          autoFocus
          value={instantSearchQuery}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ marginRight: "6px" }}>
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              padding: "0 10px",
              height: "48px",
              borderRadius: "12px",
              "& .MuiOutlinedInput-root": {
                padding: "0 10px",
                height: "48px",
                borderRadius: "12px",
                "& fieldset": {
                  height: "100%",
                  borderRadius: "12px",
                },
              },
              "& .MuiInputBase-input": {
                height: "100%",
                padding: 0,
                display: "flex",
                alignItems: "center",
              },
            },
          }}
        />

        <Box>
          <Typography variant="h6" fontWeight="bold" py={2}>
            Suggestions
          </Typography>

          <Box
            pt="20px"
            rowGap="30px"
            sx={{ height: "395px", overflow: "hidden", overflowY: "scroll" }}
          >
            {data?.searchBooks.slice(0, 9).map((book: Book) => (
              <SearchResult book={book} key={book?.author ?? "" + book.title} />
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
