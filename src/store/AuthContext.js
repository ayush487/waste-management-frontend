import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthenticationProvider = (props) => {
  const initialToken = window.localStorage.getItem("idToken");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (userToken) => {
    window.localStorage.setItem("idToken", userToken);
    setToken(userToken);
  };

  const logoutHandler = () => {
    setToken(null);
    window.localStorage.removeItem("idToken");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
