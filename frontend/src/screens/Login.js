import React from 'react';
import Header from "./../components/Header";
import { Link, Navigate} from "react-router-dom";

function Login() {
 
  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11" >
          <input
            type="email"
            placeholder="Email"
          />
          <input
            type="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
          <p>
            <Link
              to={Navigate ? `/register?redirect=${Navigate}` : "/register"}
            >
              Create <strong>New</strong> Account
            </Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Login