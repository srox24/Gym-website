import React, { Component } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { Link } from "react-router-dom";
import "../styles/header.css"
class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Fitness</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {NavbarLinks.map((items, index) => {
            return (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                  {items.title}
                </Link>
              </li>
            );
          })}
          <button>Signup</button>
        </ul>
      </nav>
    );
  }
}
export default Header;
