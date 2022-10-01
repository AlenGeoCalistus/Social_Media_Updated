import { Box, Grid, Stack, styled } from "@mui/material";

export const ProfileContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "18% 60% 20%",
  gap: "1rem",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export const ProfileCenter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  height: "100vh",
  overflow: "auto",
  // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  /* display: flex;
  flex-direction: column;
  gap: 1rem; */
}));
