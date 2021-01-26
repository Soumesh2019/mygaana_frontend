import React, { useContext, useEffect, useState } from "react";
import SERVER_HOST from "../config/base_url";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [file, setFile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timeOutId = setTimeout(() => {
      setMessage("");
    }, 2000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [message]);

  const SignUp = (email, password, confirmPass) => {
    fetch(SERVER_HOST + "/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmail("");
        setPassword("");
        setConfirmPass("");

        const { success, message } = data;
        setMessage(message);
        success && setIsLoggedIn(true);
      })
      .catch((e) => console.log(e));
  };

  const signIn = (email, password) => {
    fetch(SERVER_HOST + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { success, message } = data;
        setMessage(message);
        success && setIsLoggedIn(true);
        console.log(isLoggedIn);
      })
      .catch((e) => console.log(e));
  };

  const uploadSong = (file) => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(SERVER_HOST + "/upload", {
      method: "POST",
      body: file,
      signal,
    })
      .then((res) => res.json())
      .then((data) => {
        const { success, message } = data;
        console.log(data);
        setMessage(message);
        console.log(success);
        controller.abort();
      })
      .catch((error) => console.log("Error: ", error));
  };
  return (
    <AppContext.Provider
      value={{
        email,
        password,
        confirmPass,
        file,
        isLoggedIn,
        message,
        setEmail,
        setPassword,
        setConfirmPass,
        setFile,
        SignUp,
        signIn,
        uploadSong,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
