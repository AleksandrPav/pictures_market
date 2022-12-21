import "./categories.scss";

import items from "./items";

const Categories = ({ handleCategories }) => {
  const elements = items.map(({ id, name, slug }) => (
    <li key={id} className="item nav-item">
      <button
        className="item-button nav-link"
        onClick={() => handleCategories(id)}
      >
        <span className="link-text span-color">{name}</span>
      </button>
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
