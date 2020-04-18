import React from "react";
import logo from "../public/SVCClogo.png";

const Header = () => (
  <header className="jumbotron">
    <div className="row">
      <div className="col-12 col-sm-4 text-center">
        <h6 className="text-uppercase">October 13-14&nbsp;&nbsp;2020</h6>
        <h6 className="text-uppercase">San Jose, California</h6>
      </div>
      <div className="col-12 col-sm-8 text-lg-right">
        <div>
          <img src={logo} alt="Silicon Valley Code Camp 2020" />
        </div>
        <h2>Silicon Valley Code Camp 2020</h2>
      </div>
    </div>
  </header>
);

export default Header;
