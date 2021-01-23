import React from "react";
import { useGlobalContext } from "../context/context";

const SignIn = () => {
  const { email, password, setEmail, setPassword, signIn } = useGlobalContext();

  const handleSign = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <>
      <div className="row container">
        <div className="col m6 s12 ">
          <h1>Sign In</h1>
        </div>

        <form className="col m6 s12" onSubmit={handleSign}>
          <div className="row">
            <div className="col m12 s12 input-field">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">E-Mail</label>
            </div>
            <div className="col m12 s12 input-field">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light">Login</button>
        </form>
        <a
          className="waves-effect waves-teal btn-flat col offset-m3 m6 offset-m3 center-align"
          href="#"
        >
          New User? Sign Up
        </a>
      </div>
    </>
  );
};

export default SignIn;
