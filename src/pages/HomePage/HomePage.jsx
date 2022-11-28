import { useState, useEffect } from "react";

import Categories from "../../modules/Categories/Categories";
// import Products from "../../modules/Products/Products";

import getProduction from "../../services/API";

import "./homePage.scss";

const HomePage = () => {
  const [categories, setCategories] = useState("");
  const [parentCategories, setParentCategories] = useState([]);
  const [curentCategory, setCurentCategory] = useState([]);

  function handleCategories(id) {
    setCategories(id);
  }

  useEffect(() => {
    try {
      getProduction().then((data) => {
        setParentCategories(data.data.products);
        if (categories) {
          setCurentCategory(
            data.data.products.filter((item) => item.parent === categories)
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [categories]);

  console.log(parentCategories);
  console.log(curentCategory);

  return (
    <div className="container">
      <Categories handleCategories={handleCategories} />
      {/* <Products parentCategories={parentCategories} categories={categories} /> */}
    </div>
  );
};

export default HomePage;
