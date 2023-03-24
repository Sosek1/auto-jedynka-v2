import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const loginHandler = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logoutHandler = () => {
    return auth.signOut();
  };

  console.log(currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {!loading && props.children}
    </AuthContext.Provider>
  );
};
