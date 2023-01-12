import "./categories.scss";
import { Link } from "react-router-dom";

import items from "./items";

const Categories = ({ handleCategories }) => {
  const elements = items.map(({ id, name, slug }) => (
    <li key={id} className="item nav-item">
      <Link
        to={slug}
        className="item-button nav-link"
        onClick={() => handleCategories(id)}
      >
        <span className="link-text span-color">{name}</span>
      </Link>
    </li>
  ));

  return (
    <div className="container wrapper">
      <ul className="nav-items nav justify-content-center ">{elements}</ul>
    </div>
  );
};

export default Categories;
//  <NavLink className="category-link" to={slug}>
//    {name}
//  </NavLink>;
