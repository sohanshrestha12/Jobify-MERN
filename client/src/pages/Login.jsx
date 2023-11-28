import React from 'react'
import {Form , useNavigation,redirect,Link} from 'react-router-dom'
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({request}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post('auth/login',data);
    toast.success('Login successful');
    return redirect('/dashboard')
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data);
    return error;
  }


  return null;
}

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method='post' className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" defaultValue="abc@gmail.com" />
        <FormRow type="password" name="password" defaultValue="aaaaaaaa" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting?'submitting...':'submit'}
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
      </Form>
    </Wrapper>
  );
}

export default Login
