import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendSignupRequest } from "../store/send-request";

const SignupPage = () => {
  const navigate = useNavigate();
  const [signupError, setSignupError] = useState(null)
  const usernameRef = useRef();
  const passwordRef = useRef();
  const checkboxRef = useRef();

  const [signingUp, setSigningUp] = useState(false)

  const signup = (event) => {
    event.preventDefault();
    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const isCheckboxSelected = checkboxRef.current.checked;
    if (!isCheckboxSelected) {
      return;
    }
    sendSignupRequest({
      email: enteredUsername,
      password: enteredPassword,
    }, navigate, setSigningUp, setSignupError);
  };

  const removeLoginPageHandler = () => {
    navigate("/");
  };
  return (
    <div className="signup-page" id="signup-page">
      <div
        className="signup-page-overlay"
        id="signup-page-overlay"
        onClick={removeLoginPageHandler}
      ></div>
      <div className="signup-contents">
        <h1 className="signup-heading">Sign Up</h1>
        <form id="form-signup" onSubmit={signup}>
          <div className="input-group">
            <label htmlFor="signup-user-input">Username</label>
            <br />
            <input
              type="text"
              id="signup-user-input"
              required
              placeholder="Email/Mobile Number"
              ref={usernameRef}
            />
          </div>
          <div className="input-group">
            <label htmlFor="signup-password-input">Password</label>
            <br />
            <input
              type="text"
              id="signup-password-input"
              required
              placeholder="Password"
              ref={passwordRef}
            />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="checkbox-input" ref={checkboxRef} />
            <label htmlFor="checkbox-input">Accept Terms & Conditions</label>
            <br />
          </div>
          {signupError && <p className="error-message">{signupError}</p>}
          <div className="submit">
            <button id="signup-btn">{signingUp ? <i className="fa-solid fa-spinner fa-spin fa-lg"></i> : 'Signup'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
