import "./ByDefault.scss";
import { Link } from "react-router-dom";

const ByDefault = ({ parentCategories, search }) => {
  const findBySearch = parentCategories.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const searchResult = findBySearch.map(
    ({ id, name, article, image, buy_price_uah }) => (
      <div key={id} className="col">
        <div className="card h-100">
          <img
            src={image}
            className="card-img-top openImage"
            alt={name}
            height="400px"
            data-id={id}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Артикул: {article}</p>
            <p className="card-text">{Math.round(buy_price_uah + 100)} грн</p>
            <Link to={`/product/${id}`} className="btn btn-outline-secondary">
              Додати в кошик
            </Link>
          </div>
        </div>
      </div>
    )
  );

  const elements = parentCategories.map(
    ({ id, name, article, image, buy_price_uah }) => (
      <div key={id} className="col">
        <div className="card h-100">
          <img
            src={image}
            className="card-img-top openImage"
            alt={name}
            height="400px"
            data-id={id}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Артикул: {article}</p>
            <p className="card-text">{Math.round(buy_price_uah + 100)} грн</p>
            <Link to={`/product/${id}`} className="btn btn-outline-secondary">
              Додати в кошик
            </Link>
          </div>
        </div>
      </div>
    )
  );

  if (search === "") {
    return <div className="row row-cols-1 row-cols-md-4 g-4">{elements}</div>;
  } else {
    return (
      <div className="row row-cols-1 row-cols-md-4 g-4">{searchResult}</div>
    );
  }
};

export default ByDefault;
