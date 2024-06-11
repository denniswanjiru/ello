import { Button, ButtonProps, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

export const StyledButton = styled(Button)<ButtonProps & { danger?: boolean }>(
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
