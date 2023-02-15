import React, { useState } from "react";

export const LoginContext = React.createContext();

export const LoginContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginHandler = (status) => {
    setLoggedIn(status);
  };

  // console.log(loggedIn);

  return (
    <LoginContext.Provider value={{ loggedIn, onLogin: loginHandler }}>
      {props.children}
    </LoginContext.Provider>
  );
};
