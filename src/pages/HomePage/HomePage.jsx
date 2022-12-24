import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/PacmanLoader";

import Categories from "../../modules/Categories/Categories";
import Products from "../../modules/Products/Products";
import ByDefault from "../../modules/ByDefault/ByDefault";
import Menu from "../../modules/Menu/Menu";

import getProduction from "../../services/API";

import "./homePage.scss";

const HomePage = () => {
  const [categories, setCategories] = useState("");
  const [parentCategories, setParentCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(search);

  function takeValueSearch(value) {
    setSearch(value);
  }

  function handleCategories(id) {
    setCategories(id);
  }

  function modalImageId(id) {
    console.log(id);
  }

  const getCurentCategories = parentCategories.filter((item) => {
    return Number(item.parent) === categories;
  });

  // console.log(getCurentCategories);

  useEffect(() => {
    setLoading(true);
    try {
      getProduction().then((data) => {
        setParentCategories(data.data.products);
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (categories === "") {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <Menu takeValueSearch={takeValueSearch} />
        </nav>
        <div className="container">
          <Categories handleCategories={handleCategories} />
          <ClipLoader color={"#123abc"} loading={loading} size={50} />
          <ByDefault
            parentCategories={parentCategories}
            modalImageId={modalImageId}
            search={search}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light ">
        <Menu />
      </nav>
      <div className="container">
        <Categories handleCategories={handleCategories} />
        <Products getCurentCategories={getCurentCategories} />
      </div>
    </>
  );
};

export default HomePage;
