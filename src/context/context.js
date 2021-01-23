import React, { useContext, useState } from "react";
import SERVER_HOST from "../config";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [file, setFile] = useState(null);

  const SignUp = async (email, password, confirmPass) => {
    await fetch(SERVER_HOST + "/signUp", {
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
        console.log(data);

        setEmail("");
        setPassword("");
        setConfirmPass("");
      })
      .catch((e) => console.log(e));
  };

  const signIn = async (email, password) => {
    await fetch(SERVER_HOST + "/signin", {
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
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  const uploadSong = async (file) => {
    await fetch(SERVER_HOST + "/upload", {
      method: "POST",
      body: file,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Error: ", error));
  };

  return (
    <AppContext.Provider
      value={{
        email,
        password,
        confirmPass,
        file,
        setEmail,
        setPassword,
        setConfirmPass,
        setFile,
        SignUp,
        signIn,
        uploadSong,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
