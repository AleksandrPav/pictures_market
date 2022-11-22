import { NavLink } from "react-router-dom";

import "./categories.scss";

import items from "./items";

const Categories = () => {
  const elements = items.map(({ id, name }) => (
    <li key={id} className="nav-item">
      <NavLink className="category-link" to={name}>
        {name}
      </NavLink>
    </li>
  ));

  return (
    <div className="container wrapper">
      <ul className="nav flex-column">{elements}</ul>
    </div>
  );
};

export default Categories;
