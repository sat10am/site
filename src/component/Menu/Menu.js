import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

class Menu extends Component {
  render() {
    const { title } = this.props;
    const link = `/${title.toLowerCase()}`;

    return (
      <div className="menuItem">
        <Link to={link}>{title}</Link>
      </div>
    );
  }
}

export default Menu;
