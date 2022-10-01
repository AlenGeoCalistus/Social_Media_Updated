import { Avatar, Box, Button, styled } from "@mui/material";

export const Span = styled("span")(({ theme }) => ({
  fontSize: "14px",
}));

export const FollowersCardContainer = styled(Box)(({ theme }) => ({
  width: "91%",
  borderRadius: "0.7rem",
  gap: "1rem",
  display: "flex",
  flexDirection: "column",
  fontSize: "13px",
  maxHeight: "30rem",
  overflow:'auto',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  padding:'16px',
  marginTop:'1.5rem',
  background:'#28343e12'
}));

export const SuggestionText = styled("h3")(({ theme }) => ({
  width: "100%",
  borderRadius: "0.7rem",
  gap: "1rem",
  display: "flex",
  flexDirection: "column",
  fontSize: "20px",
  maxHeight: "10rem",
  color: "#4f515b",
}));

export const FollowerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const FollowerDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  minWidth: "1rem",
}));

export const FollowerImg = styled(Avatar)(({ theme }) => ({
  width: "3.2rem !important",
  height: "3.2rem !important",
  borderRadius: " 50% !important",
}));

export const FollowerNameContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const FollowerName = styled("span")(({ theme }) => ({
  fontWeight: "bold",
  color: "#29292d",
  fontSize: "17px",
  textTransform: "capitalize",
  "&:hover": {
    cursor: "pointer",
  },
}));

export const UnfollowBtn = styled(Button)(({ theme }) => ({
  height: "2rem !important",
  paddingLeft: "20px",
  paddingRight: "20px",
  fontSize: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff !important",
  border: "none !important",
  cursor: "pointer",
  borderRadius: "0.5rem !important",
  background: "linear-gradient(90deg, #8224e3 0, #a968ec 50%, #8224e3 100%)",
  transition: "all 100ms ease-out !important",
  boxShadow: "0 1px 3px 0 rgb(130 36 227 / 50%)",
  "&:hover": {
    color: "#fff",
    border: "none !important",
    cursor: "pointer",
    background: "linear-gradient(90deg, #8224e3 0, #a968ec 50%, #8224e3 100%)",
  },
}));

export const ShowMoreBtn = styled("span")(({ theme }) => ({
  fontWeight: "bold",
  color: "#8224e3",
  alignItems: "center",
  textAlign:'center',
  cursor: "pointer",
  fontSize: "20px",
  paddingBottom: "1rem",
  "&:hover": {
    color: " #2ed573",
    transform: "scale(1.1)",
    transition: " all 200ms ease-in-out",
  },
}));
