import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { relativePath } from "../../utils";
import IconButton from "../ui/IconButton/IconButton";
import "./MainHeader.css";

export default function MainHeader({}) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="store-header slideInDown">
      <nav className="store-header-cnt">
        <div
          className="flex-row"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {location?.state?.goback && (
            <IconButton
              name={"west"}
              className="arrow-nav-btn"
              style={{ fontWeight: "bold", marginRight: "16px" }}
              onClick={() => navigate(-1)}
            />
          )}
          <h2 className="store-name">Gidslab Perfumes</h2>
        </div>

        <nav className="navtabs-ctn">
          <ul className="navtabs">
            <li>
              <IconButton
                name={"Home"}
                className="navtabs-btn"
                onClick={() => navigate(`/1324424`, { replace: true })}
              />
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
