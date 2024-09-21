import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductDescription = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id, 10));

  const handleBackClick = () => {
    navigate(-1);
  };

  return product ? (
    <div className="product-description-div-outer">
      <button type="button" onClick={handleBackClick} className="back-button">
        Back
      </button>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  ) : (
    <p>Product not found!</p>
  );
};

ProductDescription.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductDescription;
