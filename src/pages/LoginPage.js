import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendLoginRequest } from "../store/send-request";
import AuthContext from "../store/AuthContext";

const LoginPage = () => {
  const [loggingIn, setLoggingIn] = useState(false)
  const [loginError, setLogginError] = useState(null)
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const authContext = useContext(AuthContext)
  
  const removeLoginPageHandler = () => {
    navigate("/");
  };

  const login = (event) => {
    event.preventDefault();
    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const basicToken = `Basic ${btoa(enteredUsername + ":" + enteredPassword)}`;
    // console.log(basicToken);
    sendLoginRequest(basicToken,authContext.login, navigate, setLoggingIn, setLogginError)
  };
  return (
    <React.Fragment>
      <div className="login-page" id="login-page">
        <div
          className="login-page-overlay"
          id="login-page-overlay"
          onClick={removeLoginPageHandler}
        ></div>
        <div className="login-contents">
          <h1 className="login-heading">Login</h1>
          <form id="form-login" onSubmit={login}>
            <div className="input-group">
              <label htmlFor="user-input">Username</label>
              <br />
              <input
                type="text"
                id="user-input"
                required
                placeholder="Email/Mobile Number"
                ref={usernameRef}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password-input">Password</label>
              <br />
              <input
                type="text"
                id="password-input"
                required
                placeholder="Password"
                ref={passwordRef}
              />
            </div>

            {loginError && <p className="error-message">{loginError}</p>}
            <div className="submit">
              <button id="login-btn">{loggingIn ? <i className="fa-solid fa-spinner fa-spin fa-lg"></i> : 'Login'}</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
