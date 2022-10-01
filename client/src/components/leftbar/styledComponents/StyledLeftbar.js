import { Box, styled } from "@mui/material";

export const LeftbarContainer = styled(Box)(({ theme }) => ({
  flexDirection: "column",
  minWidth: "18%",
  height: '100vh',
  overflow: 'auto',
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));
