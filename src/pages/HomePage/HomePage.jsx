import { useState, useEffect } from "react";

import Categories from "../../modules/Categories/Categories";
import Products from "../../modules/Products/Products";
import ByDefault from "../../modules/ByDefault/ByDefault";

import getProduction from "../../services/API";

import "./homePage.scss";

const HomePage = () => {
  const [categories, setCategories] = useState("");
  const [parentCategories, setParentCategories] = useState([]);

  function handleCategories(id) {
    setCategories(id);
  }

  const getCurentCategories = parentCategories.filter((item) => {
    return Number(item.parent) === categories;
  });

  // console.log(getCurentCategories);

  useEffect(() => {
    try {
      getProduction().then((data) => {
        setParentCategories(data.data.products);
      });
    } catch (error) {
      console.log(error);
    }
  }, [categories]);

  // console.log(parentCategories);
  if (categories === "") {
    return (
      <div className="container">
        <Categories handleCategories={handleCategories} />
        <ByDefault parentCategories={parentCategories} />
      </div>
    );
  }

  return (
    <div className="container">
      <Categories handleCategories={handleCategories} />
      <Products getCurentCategories={getCurentCategories} />
    </div>
  );
};

export default HomePage;
