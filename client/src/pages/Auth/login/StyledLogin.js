// import { styled, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { device } from "../../../breakpoints";

export const MainContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  background: rgba(225, 225, 225, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media ${device.tablet} {
    min-height: 100%;
  }
  @media ${device.laptop} {
    min-height: 100%;
  }
  @media ${device.laptopL} {
    min-height: auto;
  }
`;

export const LoginText = styled("h2")`
  margin: 3rem 0 2rem 0;
  @media ${device.mobileS} {
    letter-spacing: 0.1rem;
    font-size: medium;
  }
  @media ${device.mobileM} {
    letter-spacing: 0.2rem;
    font-size: medium;
  }
  @media ${device.mobileL} {
    letter-spacing: 0.3rem;
    font-size: medium;
  }
  @media ${device.tablet} {
    letter-spacing: 0.4rem;
    font-size: large;
    font-weight: bolder;
  }
`;

export const SignInText = styled("h2")`
  margin: 3rem 0 2rem 0;
  color: #091130;
  @media ${device.mobileS} {
    letter-spacing: 0.1rem;
    font-size: medium;
  }
  @media ${device.mobileM} {
    letter-spacing: 0.2rem;
    font-size: medium;
  }
  @media ${device.mobileL} {
    letter-spacing: 0.3rem;
    font-size: medium;
  }
  @media ${device.tablet} {
    letter-spacing: 0.4rem;
    font-size: large;
    font-weight: bolder;
  }
`;

export const InputForm = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 100%;
`;

export const Input = styled("input")`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  /* height: 1rem; */
  padding: 1rem;
  border: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  margin: 10px 0 10px 0;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
    outline: none;
  }
  &::placeholder {
    color: grey;
    font-weight: 300px;
    font-size: 1rem;
  }
  @media ${device.laptop} {
    height: 1rem;
  }
  @media ${device.tablet} {
    height: 1rem;
  }
  @media ${device.mobileS} {
    height: 1rem;
  }
  @media ${device.mobileM} {
    height: 1rem;
  }
  @media ${device.mobileL} {
    height: 1rem;
  }
`;

export const ButtonContainer = styled("div")`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled("button")`
  background: linear-gradient(
    115deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(71, 90, 164, 1) 0%,
    rgba(18, 22, 48, 1) 100%
  );
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 2rem;
  cursor: pointer;
`;

export const LoginWith = styled("h5")`
  cursor: pointer;
`;

export const HorizontalRule = styled("hr")`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(
    115deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(71, 90, 164, 1) 0%,
    rgba(18, 22, 48, 1) 100%
  );
  backdrop-filter: blur(25px);
`;

export const SignInHorizontalRule = styled("hr")`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(
    115deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(71, 90, 164, 1) 0%,
    rgba(18, 22, 48, 1) 100%
  );
  backdrop-filter: blur(25px);
`;

export const IconsContainer = styled("h4")`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

export const ForgotPassword = styled("h4")`
  cursor: pointer;
  @media ${device.mobileS} {
    letter-spacing: 0.2rem;
    font-size: medium;
  }
  @media ${device.mobileM} {
    letter-spacing: 0.2rem;
    font-size: medium;
  }
  @media ${device.mobileL} {
    letter-spacing: 0.2rem;
    font-size: medium;
  }
  @media ${device.tablet} {
    letter-spacing: 0.4rem;
    font-size: medium;
  }
`;

export const CreateNewAcc = styled("h4")`
  cursor: pointer;
  margin-bottom: 1rem;
  @media ${device.mobileS} {
    letter-spacing: 0.1rem;
    font-size: medium;
  }
  @media ${device.mobileM} {
    letter-spacing: 0.2rem;
    font-size: medium;
  }
  @media ${device.mobileL} {
    letter-spacing: 0.3rem;
    font-size: medium;
  }
  @media ${device.tablet} {
    letter-spacing: 0.4rem;
    font-size: medium;
  }
`;

export const AlreadyHaveAcc = styled("h4")`
  cursor: pointer;
  margin-bottom: 1rem;
  color: #091130;
  @media ${device.mobileS} {
    letter-spacing: 0.2px;
    font-size: medium;
  }
  @media ${device.mobileM} {
    letter-spacing: 0.2px;
    font-size: medium;
  }
  @media ${device.mobileL} {
    letter-spacing: 0.2rem;
    font-size: medium;
  }
  @media ${device.tablet} {
    letter-spacing: 0.4rem;
    font-size: medium;
  }
`;

// export const CircularLoading = styled(CircularProgress)(({ theme }) => ({
//   color: "white",
//   height: "20px !important",
//   width: "20px !important",
// }));
