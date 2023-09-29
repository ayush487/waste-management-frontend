import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";

const Header = () => {
  return (
    <React.Fragment>
      <header className="head">
        <div className="box1">
          <Logo />
          <Menu />
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
