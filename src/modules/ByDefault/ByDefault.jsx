import "./ByDefault.scss";
import { Link } from "react-router-dom";

const ByDefault = ({ parentCategories, activeModal, modalImageId }) => {
  const onClickImage = (e) => {
    const id = e.target.getAttribute("data-id");
    modalImageId(id);
    activeModal();
  };

  const elements = parentCategories.map(
    ({ id, name, article, image, buy_price_uah }) => (
      <div key={id} className="col">
        <div className="card h-100">
          <img
            onClick={onClickImage}
            src={image}
            className="card-img-top openImage"
            alt={name}
            height="400px"
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

  return <div className="row row-cols-1 row-cols-md-3 g-4">{elements}</div>;
};

export default ByDefault;
