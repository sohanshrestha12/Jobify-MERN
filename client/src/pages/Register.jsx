import React from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

export const action = async (data) => {
  console.log(data);
  return null;
};
const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="abc" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="xyz"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="email" name="email" defaultValue="abc@gmail.com" />
        <FormRow type="password" name="password" defaultValue="abc" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
