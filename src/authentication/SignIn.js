import React from "react";
import { useGlobalContext } from "../context/context";
import { Link, Redirect } from "react-router-dom";

const SignIn = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    signIn,
    isLoggedIn,
    message,
  } = useGlobalContext();

  const handleSign = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <>
      {isLoggedIn ? (
        <Redirect exact to="/upload" />
      ) : (
        <div className="row container">
          <div className="col m6 s12 ">
            <h1>Sign In</h1>
          </div>

          <form className="col m6 s12" onSubmit={handleSign}>
            <div className="row">
              <div className="col m12 s12">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">E-Mail</label>
              </div>
              <div className="col m12 s12">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light pink">Login</button>
          </form>
          <p>{message}</p>
          <Link
            to="/signup"
            className="btn-flat waves-effect waves-teal col m6 offset-m2 push-m3 "
          >
            New User? Sign Up
          </Link>
        </div>
      )}
    </>
  );
};

export default SignIn;
