import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { Button, ButtonProps } from "@mui/material";
import { orange } from "@mui/material/colors";
import BookUrl from "../assets/image10.webp";

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

export default function BookCard({ reading }: { reading?: boolean }) {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 154 }}
        image={BookUrl}
        style={{ borderRadius: "10px" }}
        alt="Live from space album cover"
      />

      <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: 2 }}>
        <CardContent sx={{}}>
          <Typography component="div" variant="h6">
            2 - 5 years
          </Typography>

          <Typography component="div" variant="h5" fontWeight="bold">
            Live From Space
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", pt: 1, pb: 1 }}>
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
