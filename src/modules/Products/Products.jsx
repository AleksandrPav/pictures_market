import "./products.scss";

const Products = ({ getCurentCategories }) => {
  console.log(getCurentCategories);
  const elements = getCurentCategories.map(({ id, name, article }) => (
    <div key={id} className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{article}</p>
      </div>
    </div>
  ));

  return <div className="container wrapper">{elements}</div>;
};

export default Products;
