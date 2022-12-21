import "./categories.scss";

import items from "./items";

const Categories = ({ handleCategories }) => {
  const elements = items.map(({ id, name, slug }) => (
    <li key={id} className="nav-item">
      <button className="nav-link" onClick={() => handleCategories(id)}>
        <span className="link-text">{name}</span>
      </button>
    </li>
  ));

  return (
    <div className="container wrapper">
      <ul className="nav justify-content-center ">{elements}</ul>
    </div>
  );
};

export default Categories;
//  <NavLink className="category-link" to={slug}>
//    {name}
//  </NavLink>;
