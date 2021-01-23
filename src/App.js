import React from "react";
import SignUp from "./authentication/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./authentication/SignIn";
import Upload from "./upload/upload";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
