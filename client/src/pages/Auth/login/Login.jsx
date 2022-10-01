import React, { useState } from "react";
import "./Login.css";
import { logIn } from "../../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Icons from "./Icons";
import {
  Button,
  ButtonContainer,
  CreateNewAcc,
  ForgotPassword,
  HorizontalRule,
  IconsContainer,
  Input,
  InputForm,
  LoginText,
  LoginWith,
  MainContainer,
  CircularLoading,
} from "./StyledLogin";

function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // OAuth bgColors
  const FacebookBackground =
    "linear-gradient(to right, #0546a0 0%, #663f86 100%)";
  const InstaBackground =
    "linear-gradient(to right, #a12ac4 0%, #ed586c 40%, #f0a853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56c1e1 0%, #35a9ce 50%)";

  //useRef for Login Email and Password

  //AuthContext

  // Login Function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(data, navigate));
  };

  return (
    <div className="wrappers">
      <MainContainer>
        <LoginText>Login to your account</LoginText>
        <InputForm onSubmit={handleSubmit}>
          <Input type="text" placeholder="Email" name="username"
              value={data.username}
              onChange={handleChange} />
          <Input type="text" placeholder="Password" name="password"
              value={data.password}
              onChange={handleChange} />
          <ButtonContainer>
            <Button type="submit">{loading ? "Loading..." : "Sign In"}</Button>
          </ButtonContainer>
        </InputForm>
        <LoginWith>or Login With</LoginWith>
        <HorizontalRule />
        <IconsContainer>
          <Icons color={FacebookBackground}>
            <FaFacebookF />
          </Icons>
          <Icons color={InstaBackground}>
            <FaInstagram />
          </Icons>
          <Icons color={TwitterBackground}>
            <FaTwitter />
          </Icons>
        </IconsContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
        <Link style={{ textDecoration: "none", color: "white" }} to="/signup">
          <CreateNewAcc style={{ marginTop: 10, textDecoration: "none" }}>
            Create New Account ?
          </CreateNewAcc>
        </Link>
      </MainContainer>
    </div>
  );
}

export default Login;
