import React from "react";
import Header from "../header/Header";

const Layout = (props) => {
  return(
    <React.Fragment>
      <Header />
      <main className="pageContent">
        {props.children}
      </main>
    </React.Fragment>
  )
}

export default Layout;