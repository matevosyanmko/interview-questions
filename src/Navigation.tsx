import { NavLink } from "react-router-dom";
import React from "react";
import { PAGES } from "./pages";

const Navigation = () => {
  return (
    <ul>
      {PAGES.map((route) => (
        <li key={route.path}>
          <NavLink
            to={route.path}
            children={route.label}
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
          />
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
