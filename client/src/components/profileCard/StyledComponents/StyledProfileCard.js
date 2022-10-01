import { Avatar, Box, Stack, styled } from "@mui/material";

export const ProfileCardContainer = styled(Stack)(({ theme }) => ({
  borderRadius: "1.5rem",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  gap: "1rem",
  overflowX: "clip",
  backgroundColor: "#28343e12",
  boxShadow: "#43ff64d9",
  width: "100%",
  minWidth: "20%",
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}));

export const ProfileImgContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
 
}));

export const CoverImg = styled("img")(({ theme }) => ({
  width: "100%",
  minWidth: "20%",
  height: "15rem",
  objectFit: "cover",
}));

export const ProfileImg = styled(Avatar)(({ theme }) => ({
  width: "6rem !important",
  minWidth:'3rem !important',
  height: "6rem",
  borderRadius: "50%",
  position: "absolute",
  bottom: "-3rem",
  boxShadow: "0px 4px 17px 2px rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "all 200ms ease-in-out",
  },
}));

export const ProfileNameContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "3rem",
  gap: "10px",
}));

export const Username = styled("span")(({ theme }) => ({
  fontWeight: "bold",
  textTransform:'capitalize'
}));

export const Email = styled("span")(({ theme }) => ({
  color: "#242d49a6",
  fontSize: "13px",
}));

export const Divider = styled("hr")(({ theme }) => ({
  width: "85%",
  border: "1px solid #cfcdcd",
}));

export const FollowStatusContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const FollowStatus = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  width: "80%",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const Follow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  alignItems: "center",
  justifyContent: "center",
}));

export const FollowerLength = styled("span")(({ theme }) => ({
  fontWeight: "bold",
}));

export const Followers = styled("span")(({ theme }) => ({
  color: "gray",
  fontSize: "13px",
}));

export const VDivider = styled(Box)(({ theme }) => ({
  height: "150%",
  borderLeft: "2px solid #cfcdcd",
}));

export const MyProfile = styled("span")(({ theme }) => ({
  color: "#8224e3",
  alignSelf: "center",
  fontWeight: "bold",
  marginBottom: "1rem",
  cursor: "pointer",
  "&:hover": {
    color: "#2ed573",
    transform: "scale(1.1)",
    transition: "all 200ms ease-in-out",
  },
}));
