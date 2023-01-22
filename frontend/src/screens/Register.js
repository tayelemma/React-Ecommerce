import React from 'react';
import { Link, useLocation } from "react-router-dom";

import Header from "./../components/Header";

function Register() {
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  
  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
        >
          <input
            type="text"
            placeholder="Username"
          />
          <input
            type="email"
            placeholder="Email"
          />
          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">Register</button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Register