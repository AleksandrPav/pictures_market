const ProductModal = ({ product, onClose }) => {
  console.log(product);
  const elements = product.map(({ id, name, image, description }) => (
    <div key={id} className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <img src={image} alt={name} />
        <p className="card-text">{description}</p>
      </div>
    </div>
  ));

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <button onClick={onClose} className="btn-close">
          X
        </button>
        <div className="container wrapper">{elements}</div>
      </div>
    </div>
  );
};

export default ProductModal;
