import { Box, Grid, styled } from "@mui/material";

export const ProfileSideContainer = styled(Box)(({ theme }) => ({
  flexDirection: "column",
  gap: "1rem",
  height: "100vh",
  overflow: "auto",
  minWidth: "18%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));
