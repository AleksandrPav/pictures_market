import { useState, useEffect } from "react";

import Categories from "../../modules/Categories/Categories";
import Products from "../../modules/Products/Products";
import ByDefault from "../../modules/ByDefault/ByDefault";
import ProductModal from "../../modules/ProductModal/ProductModal";

import getProduction from "../../services/API";

import "./homePage.scss";

const HomePage = () => {
  const [categories, setCategories] = useState("");
  const [parentCategories, setParentCategories] = useState([]);
  const [activeModal, setActiveModal] = useState(false);

  console.log(activeModal);

  function handleCategories(id) {
    setCategories(id);
  }

  function onActiveModal() {
    setActiveModal(true);
  }

  function onCloseModal() {
    setActiveModal(false);
  }

  function modalImageId(id) {
    console.log(id);
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

  if (activeModal) {
    return (
      <>
        <Categories handleCategories={handleCategories} />
        <ProductModal
          onCloseModal={onCloseModal}
          product={getCurentCategories}
        />
      </>
    );
  }

  if (categories === "") {
    return (
      <div className="container">
        <Categories handleCategories={handleCategories} />
        <ByDefault
          parentCategories={parentCategories}
          activeModal={onActiveModal}
          modalImageId={modalImageId}
        />
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
