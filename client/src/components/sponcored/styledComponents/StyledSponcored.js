import { Box, styled } from "@mui/material";

export const SponcoredContainer = styled(Box)(({ theme }) => ({
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  borderRadius:'10px',
  background:'#28343e12'
  
}));

export const SponcoredText = styled("h6")(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "800",
  color: "grey",
  margin:'0',
  
}));

export const AdsImg = styled("img")(({ theme }) => ({
  width: "100%",
  margin: "10px 0",
  borderRadius: " 10px",
}));

export const BirthdayContainer = styled(Box)(({ theme }) => ({
display:'flex',
alignItems:'center',
}));

export const BirthdayImg = styled("img")(({ theme }) => ({
    maxWidth: '3rem ',
    maxHeight: '3rem ',
    marginRight: '10px',
}));

export const BirthdayText = styled("span")(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    color: '#383a45',
}));

export const ContactsContainer = styled(Box)(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    color: '#383a45',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));
