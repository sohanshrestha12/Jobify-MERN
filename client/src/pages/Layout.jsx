import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import {Logo} from '../components'

const Layout = () => {
  return (
    <>
      <Wrapper>
        <nav>
          {/* <img src={logo} alt="jobify" className="logo" /> */}
          <Logo/>
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking </span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              tempore quos nisi quas! Quis aliquam necessitatibus omnis magnam
              delectus sapiente nemo tempore maiores placeat? Ducimus, a earum
              vel officiis at sequi? Natus nulla itaque minus ratione doloremque
              consequatur asperiores ullam dignissimos, laborum exercitationem
              nostrum labore fugit sit cupiditate fuga quod, sapiente
              praesentium magni corrupti aliquid tempore, dolorum culpa iusto
              voluptas! Suscipit unde officia accusantium eveniet!
            </p>
            <Link to="/register" className="btn register-link">
              Register
            </Link>
            <Link to="/login" className="btn ">
              Login / Demo User
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </>
  );
};
export default Layout;
