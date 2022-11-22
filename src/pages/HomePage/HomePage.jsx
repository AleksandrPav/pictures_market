import { useEffect, useState } from "react";

import Categories from "../../modules/Categories/Categories";

import getProduction from "../../services/API";

import "./homePage.scss";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProduction().then((array) => setCategories(array.data.categories));
  }, []);

  return (
    <div className="container">
      <Categories categories={categories} />
    </div>
  );
};

export default HomePage;
