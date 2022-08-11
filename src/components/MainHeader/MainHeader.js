import React from "react";
import IconButton from "../ui/IconButton/IconButton";
import "./MainHeader.css";

export default function MainHeader({}) {
  return (
    <header className="store-header slideInDown">
      <nav className="store-header-cnt">
        <h2 className="store-name">My Store </h2>
        <nav className="navtabs-ctn">
          <ul className="navtabs">
            <li>
              <IconButton name={"Home"} className="navtabs-btn" />
            </li>
            <li>
              <IconButton name={"search"} className="navtabs-btn" />
            </li>
            <li>
              <IconButton name={"shopping_cart"} className="navtabs-btn" />
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  );
}
