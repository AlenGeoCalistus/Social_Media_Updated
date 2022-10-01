import { styled, Box } from "@mui/material";

export const SearchContainer = styled(Box)({
  display: "flex",
  borderRadius: "20px",
  marginBottom:'0.5rem'
});

export const SearchWrapper = styled(Box)({
  display: "flex",
  borderRadius: "20px",
  padding: "2px",
  backgroundColor: "#28343e12",
  minWidth:'1rem'
});

export const SearchInput = styled("input")(({ theme }) => ({
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  paddingLeft: "5px",
  width: "14rem",
  minWidth:'1rem'
}));

export const SearchIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(90deg, #8224e3 0, #a968ec 50%, #8224e3 100%)",
  borderRadius: "20px",
  padding: "4px",
  color: "white",
  cursor: "pointer",
}));
