import { NavLink, Link } from "react-router-dom";

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
    <div className="container-fluid justify-content-between ">
      <Link className="navbar-brand" to={"/"}>
        <img
          src="../img/logo/logo-removebg-preview.png"
          alt="logo"
          className="logo"
          width="30"
          height="24"
        />
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav justify-content-center">{elements}</ul>
      </div>
    </div>
  );
};

export default Menu;
