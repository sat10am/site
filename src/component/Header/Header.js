import React, { Component } from "react";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <>
        <div className="headerWrapper">
          <Link to="/">
            <img className="logo" src="/images/logo.svg" alt="logo" />
          </Link>
          <Menu title="About" />
          <Menu title="Member" />
          <Menu title="Archive" />
        </div>
      </>
    );
  }
}

export default Header;
