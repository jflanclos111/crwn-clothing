import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="options" to="/shop">
          SHOP
        </Link>
        <Link className="options" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
