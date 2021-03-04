import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ path, exact, name, onClick }) => (
  <li className="navagationListItem">
    <NavLink
      to={path}
      exact={exact}
      className="navagationLink"
      activeClassName="activeLink"
      onClick={onClick}
    >
      {name}
    </NavLink>
  </li>
);

export default NavigationLink;
