import styled from "styled-components";
import { Box, Button } from "@mui/material";

export const PostContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--cardColor);
  border-radius: 1rem;
  gap: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const PostImg = styled("img")`
  width: 100%;
  max-height: 20rem;
  object-fit: cover;
  border-radius: 0.5rem;
  &:hover {
    /* transform: scale( 1.1); */
    transition: all 0.5s;
  }
`;
export const PostReactContainer = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;
export const LikeImg = styled("img")`
  cursor: pointer;
`;
export const CommentImg = styled("img")``;
export const ShareImg = styled("img")``;
// export const Span = styled("span")`
//   color: lightgray;
//   font-size: 12px;
// `;
export const LikeText = styled("span")`
  color: grey;
  font-size: 17px;
  font-weight: bold;
`;
export const PostDtlContainer = styled(Box)``;
export const PostName = styled("span")``;
export const Username = styled("span")`
  color: #29292d;
  padding-left: 1rem;
`;
export const PostDesc = styled("span")``;
export const BoldText = styled("b")`
  text-transform: capitalize;
`;
export const CommentBox = styled("input")`
outline: none;
border-radius: 15px;
margin-top: 7px;
padding-left: 0.5rem;

`;

export const SendButton = styled(Button)`
margin-left: 1rem;
border-radius: 1rem ;
text-transform: capitalize;
`
