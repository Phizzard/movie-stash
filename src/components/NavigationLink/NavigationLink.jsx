import React from "react";
import { NavLink } from "react-router-dom";

function NavigationLink({
  to,
  children,
  className = "px-3 py-2 rounded-md text-sm font-medium text-gray-300 focus:outline-none focus:text-white focus:bg-gray-700",
  activeClassName = "bg-gray-900 text-white",
}) {
  return (
    <NavLink
      exact
      to={to}
      activeClassName={activeClassName}
      className={className}
    >
      {children}
    </NavLink>
  );
}

export default NavigationLink;
