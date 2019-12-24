import React from "react";
import Search from "../recipe/Search";
import Random from "../recipe/Random";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="container">
        <li className="navbar__title">
          Recipe<span>App</span>
        </li>
        <Search />
        <Random />
      </ul>
    </nav>
  );
};

export default Navbar;
