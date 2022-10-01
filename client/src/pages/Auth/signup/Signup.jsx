import React, { useState } from "react";
import "./Signup.css";
import { signUp } from "../../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  AlreadyHaveAcc,
  Button,
  ButtonContainer,
  Input,
  InputForm,
  MainContainer,
  SignInText,
  SignInHorizontalRule,
} from "../login/StyledLogin";

function Signup() {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState(initialState);

  // const [confirmPass, setConfirmPass] = useState(true);

  // const resetForm = () => {
  //   setData(initialState);
  //   setConfirmPass(confirmPass);
  // };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // Signup Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("dataaaaaaaaaaaaa", data);
    if (data.password !== data.confirmpass) {
      data.password.setCustomValidity("Passwords don't match !");
    } else {
      dispatch(signUp(data, navigate));
    }
  };

  return (
    <div className="registerMainContainer">
      <MainContainer>
        <SignInText>Create New Account</SignInText>
        <InputForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
          />

          <Input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Email"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Re-Enter Password"
            name="confirmpass"
            onChange={handleChange}
          />
          <ButtonContainer>
            <Button type="submit">{loading ? "Loading..." : "Sign up"}</Button>
          </ButtonContainer>
        </InputForm>
        <SignInHorizontalRule />
        <Link style={{ textDecoration: "none", color: "white" }} to="/login">
          <AlreadyHaveAcc style={{ marginTop: 10, textDecoration: "none" }}>
            Already Have An Account ?
          </AlreadyHaveAcc>
        </Link>
      </MainContainer>
    </div>
  );
}

export default Signup;
