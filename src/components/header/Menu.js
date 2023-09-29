import { useContext } from "react";
import userPng from "../../assets/user.png";
import AuthContext from "../../store/AuthContext";
import { Link } from "react-router-dom";

const Menu = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className="menu">
      <div className="dropdown menu-btn">
        <a className="dropbtn">Menu</a>
        <div className="dropdown-content">
          {!authContext.isLoggedIn && (
            <Link to="/login" className="dropbtn" id="login-nav">
              Login
            </Link>
          )}
          {!authContext.isLoggedIn && (
            <Link to="/signup" className="dropbtn">
              Join US
            </Link>
          )}
          <a className="dropbtn">Map</a>
          <a className="dropbtn">About US</a>
          <a className="dropbtn">Environment</a>
        </div>
      </div>
      <div className="dropdown">
        <Link to="/" className="dropbtn">Home</Link>
      </div>
      <div className="dropdown">
        <a className="dropbtn">Map</a>
      </div>
      <div className="dropdown">
        <a className="dropbtn">About US</a>
        <div className="dropdown-content">
          <a href="#">Our Services</a>
          <a href="#">Team</a>
          <a href="#">About Project</a>
        </div>
      </div>
      <div className="dropdown">
        <Link to="/environment" className="dropbtn">Environment</Link>
      </div>

      
      {!authContext.isLoggedIn && (
        <div className="dropdown">
          <Link to="/signup" className="dropbtn">Join US</Link>
        </div>
      )}
      {authContext.isLoggedIn && (
        <div className="dropdown profile-div">
          <a className="dropbtn profile">
            <img src={userPng} alt="profile" />
          </a>
          <div className="dropdown-content profile-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      )}

      {!authContext.isLoggedIn && (
        <div className="dropdown login-btn">
          <Link to="/login" className="dropbtn" id="login-nav">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
