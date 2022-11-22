import { NavLink } from "react-router-dom";

import "./menu.scss";

import items from "./items";

const getClassName = ({ isActive }) => {
  const className = "menu__item";
  if (isActive) {
    return `${className} menu__item--active`;
  }
  return className;
};

const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className="wrapper">
      <ul className="menu">{elements}</ul>
    </div>
  );
};

export default Menu;
