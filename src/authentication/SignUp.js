import React from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    email,
    password,
    confirmPass,
    setEmail,
    setPassword,
    setConfirmPass,
    SignUp,
    message,
  } = useGlobalContext();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await SignUp(email, password, confirmPass);
  };

  return (
    <>
      <div className="row container">
        <div className="col m6 s12 vertical-wrapper">
          <h1>Sign Up</h1>
        </div>

        <form className="col m6 s12" onSubmit={handleSignUp}>
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
            <div className="col m12 s12 input-field">
              <input
                id="confirmPass"
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <label htmlFor="confirmPass">Confirm Password</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
        {message !== "" && <p>{message}</p>}
        <Link
          to="/signin"
          className="btn-flat waves-effect waves-teal col m6 offset-m2 push-m3 "
        >
          Already Have An Account? Sign In
        </Link>
      </div>
    </>
  );
};

export default SignUp;
