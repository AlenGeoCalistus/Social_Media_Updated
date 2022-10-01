import styled from "styled-components";
import { Box, Button } from "@mui/material";

export const InfoCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: '#28343e12' !important;
  padding: 1rem;
  border-radius: 1rem;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const InfoHead = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform:uppercase;
`;

export const profileInfoText = styled("h4")`
  /* font-weight: bold; */
`;

export const ProfileModalWrapper = styled(Box)`
  &:hover {
    cursor: pointer;
  }
`;
export const InfoContainer = styled(Box)`

  &:hover {
    cursor: pointer;
  }
`;

export const BoldTxt = styled("b")`
  /* &:hover {
    cursor: pointer;
  } */
`;
export const Span = styled("span")`
  /* &:hover {
    cursor: pointer;
  } */
`;

export const LogoutBtn = styled(Button)`
  width: 7rem !important;
  height: 2rem !important;
  margin-top: 6rem !important;
  align-self: flex-end !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: white !important;
  border: none;
  border-radius: 0.5rem !important;
  background: linear-gradient(90deg,#8224e3 0,#a968ec 50%,#8224e3 100%) !important;

  transition: all 100ms ease-out !important;
  &:hover {
    color: #fff !important;
    border: 2px solid #8224e3 !important;
    cursor: pointer;
    background: linear-gradient(90deg,#8224e3 0,#a968ec 50%,#8224e3 100%) !important;
  }
`;
