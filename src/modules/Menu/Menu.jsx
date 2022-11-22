import { NavLink } from "react-router-dom";

import "./menu.scss";

import items from "./items";

const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id} className="nav-item ">
      <NavLink className="nav-link" to={to}>
        <span className="link-text">{text}</span>
      </NavLink>
    </li>
  ));

  return (
    <nav className="nav justify-content-center wrapper">
      <ul className="nav justify-content-center">{elements}</ul>
    </nav>
  );
};

export default Menu;
