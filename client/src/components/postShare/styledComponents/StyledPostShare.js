import { Avatar, Box, Button, styled } from "@mui/material";

export const PostShareContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  padding: "1rem",
  borderRadius: "1rem",
  // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
}));

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  borderRadius: "50% !important",
  width: "3rem !important",
  height: "3rem !important",
}));

export const ShareInputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "90%",
  minWidth: "20%",
  gap: "1rem",
}));

export const ShareInput = styled("input")(({ theme }) => ({
  backgroundColor: "#28343e12",
  borderRadius: "10px",
  padding: "10px",
  fontSize: "17px",
  border: "none",
  outline: "none",
}));

export const PostOptions = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  [theme.breakpoints.down("md")]: {},
}));

export const PostOption = styled(Box)(({ theme }) => ({
  padding: "5px",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  "&:hover": {
    cursor: "pointer",
  },
  [theme.breakpoints.down("md")]: {
    display: "grid",
  },
}));

export const ShareBtn = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white !important",
  border: "none !important",
  borderRadius: " 0.5rem !important",
  background: "linear-gradient(90deg,#8224e3 0,#a968ec 50%,#8224e3 100%) !important",
  transition: "all 100ms ease-out !important",
  padding: "5px",
  paddingLeft: "20px",
  paddingRight: "20px",
  fontSize: "12px !important",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const FileInputContainer = styled(Box)(({ theme }) => ({
  display: "none",
}));

export const PreviewImgContainer = styled(Box)(({ theme }) => ({
  position: "relative",
}));

export const PreviewImg = styled(Box)(({ theme }) => ({
  width: "100%",
  maxHeight: "20rem",
  objectFit: "cover",
  borderRadius: "0.5rem",
}));

export const SvgContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "1rem",
  top: "0.5rem",
  cursor: "pointer",
}));
