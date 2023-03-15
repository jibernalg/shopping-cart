import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <h1>The iShopping! (For educational purposes only)</h1>
      <ul className="Menus">
        <Link className="no-underline" to="/">
          <li>HOME</li>
        </Link>
        <Link className="no-underline" to="/iphone">
          <li>IPHONE</li>
        </Link>
        <Link className="no-underline" to="/macbook">
          <li>MACBOOK</li>
        </Link>
        <Link className="no-underline" to="/cart">
          <li>CART</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
