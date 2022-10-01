import styled from "styled-components";
import { Avatar, Box, Button } from "@mui/material";

export const PostShareContainer = styled(Box)`
  display: flex;
  gap: 1rem;
  background-color: var(--cardColor);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const ProfileAvatar = styled(Avatar)`
  border-radius: 50% !important;
  width: 3rem !important;
  height: 3rem !important;
`;
export const ShareInputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 1rem;
`;
export const ShareInput = styled("input")`
  background-color: #28343e12;
  background: #28343e12 !important;
  border-radius: 10px;
  padding: 10px;
  font-size: 17px;
  border: none;
  outline: none;
`;
export const PostOptions = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const PostOption = styled(Box)`
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;
export const ShareBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white !important;
  border: none !important;
  border-radius: 0.5rem !important;
  background: linear-gradient(
    90deg,
    #8224e3 0,
    #a968ec 50%,
    #8224e3 100%
  ) !important;
  transition: all 100ms ease-out !important;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 12px !important;
`;
export const FileInputContainer = styled(Box)`
  display: none;
`;
export const PreviewImgContainer = styled(Box)`
  position: relative;
`;
export const PreviewImg = styled("img")`
  width: 100%;
  max-height: 20rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;
export const SvgContainer = styled(Box)`
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  cursor: pointer;
`;
