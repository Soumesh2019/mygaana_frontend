import React from "react";
import SignUp from "./authentication/SignUp";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import SignIn from "./authentication/SignIn";
import Upload from "./upload/upload";
import Home from "./Home";
import { useGlobalContext } from "./context/context";
import Navbar from "./Navbar";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();

  return (
    <BrowserRouter>
      <Navbar
        isLoggedInProp={isLoggedIn}
        setIsLoggedInProp={() => setIsLoggedIn(!isLoggedIn)}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/signin">
          <SignIn />
        </Route>
        {isLoggedIn ? (
          <Route exact path="/upload">
            <Upload />
          </Route>
        ) : (
          <Redirect to="/signin" />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
