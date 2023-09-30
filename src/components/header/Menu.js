import { useContext } from "react";
import userPng from "../../assets/user.png";
import AuthContext from "../../store/AuthContext";
import { Link } from "react-router-dom";

const Menu = () => {
  const authContext = useContext(AuthContext);

  const logout = () => {
    authContext.logout();
  };

  return (
    <div className="menu">
      <div className="dropdown menu-btn">
        <span className="dropbtn">Menu</span>
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
          <Link to="/map" className="dropbtn">Map</Link>
          <Link to="/about" className="dropbtn">About US</Link>
          <Link to="/environment" className="dropbtn">
            Environment
          </Link>
          {authContext.isLoggedIn && (
            <span onClick={logout} className="dropbtn" style={{color : 'white'}}>
              Logout
            </span>
          )}
        </div>
      </div>
      <div className="dropdown">
        <Link to="/" className="dropbtn">
          Home
        </Link>
      </div>
      <div className="dropdown">
        <Link to="/map" className="dropbtn">Map</Link>
      </div>
      <div className="dropdown">
        <Link to="/about" className="dropbtn">About US</Link>
        <div className="dropdown-content">
          <Link to="/about">Our Services</Link>
          <Link to="/about">Team</Link>
          <Link to="/about">About Project</Link>
        </div>
      </div>
      <div className="dropdown">
        <Link to="/environment" className="dropbtn">
          Environment
        </Link>
      </div>

      {!authContext.isLoggedIn && (
        <div className="dropdown">
          <Link to="/signup" className="dropbtn">
            Join US
          </Link>
        </div>
      )}
      {authContext.isLoggedIn && (
        <div className="dropdown profile-div">
          <span className="dropbtn profile">
            <img src={userPng} alt="profile" />
          </span>
          <div className="dropdown-content profile-content">
            <span onClick={logout}>Logout</span>
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
