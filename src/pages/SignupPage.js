import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const removeLoginPageHandler = () => {
    navigate("/");
  };
  return (
    <div class="signup-page" id="signup-page">
      <div
        class="signup-page-overlay"
        id="signup-page-overlay"
        onClick={removeLoginPageHandler}
      ></div>
      <div class="signup-contents">
        <h1 class="signup-heading">Sign Up</h1>
        <form id="form-signup">
          <div class="input-group">
            <label for="signup-user-input">Username</label>
            <br />
            <input
              type="text"
              id="signup-user-input"
              required
              placeholder="Email/Mobile Number"
            />
          </div>
          <div class="input-group">
            <label for="signup-password-input">Password</label>
            <br />
            <input
              type="text"
              id="signup-password-input"
              required
              placeholder="Password"
            />
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="checkbox-input" required />
            <label for="checkbox-input">Accept Terms & Conditions</label>
            <br />
          </div>
          <div class="submit">
            <button id="signup-btn">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
