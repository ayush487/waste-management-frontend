import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const removeLoginPageHandler = () => {
    navigate("/")
  }
  return (
    <React.Fragment>
      <div className="login-page" id="login-page">
        <div className="login-page-overlay" id="login-page-overlay" onClick={removeLoginPageHandler}></div>
        <div className="login-contents">
          <h1 className="login-heading">Login</h1>
          <form id="form-login">
            <div className="input-group">
              <label htmlFor="user-input">Username</label>
              <br />
              <input
                type="text"
                id="user-input"
                required
                placeholder="Email/Mobile Number"
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
              />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="checkbox-input" required />
              <label htmlFor="checkbox-input">Accept Terms & Conditions</label>
              <br />
            </div>
            <div className="submit">
              <button id="login-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
