import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField } from "@mui/material";

import { useState } from "react";
import SearchModal from "./modals/search-modal";
import Logo from "/assets/ello-logo.png";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Box component="header" pt={3}>
      <Box
        component="nav"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Box src={Logo} width={88} alt="Ello logo" component="img" />

        <Box>
          <TextField
            variant="outlined"
            placeholder="Search by title"
            onMouseDown={() => setShowModal(true)}
            onKeyDown={() => setShowModal(true)}
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
        </Box>
      </Box>

      <SearchModal open={showModal} handleClose={() => setShowModal(false)} />
    </Box>
  );
}
