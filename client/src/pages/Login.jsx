import React from 'react'
import {Link} from 'react-router-dom'
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";


const Login = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" defaultValue="abc@gmail.com" />
        <FormRow type="password" name="password" defaultValue="abc" />
        <button type="submit" className="btn btn-block">
          login
        </button>
        <button type="button" className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Login
