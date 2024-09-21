import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TiHeart, TiHeartOutline, TiShoppingCart } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { likeProduct, removeProductLike } from '../redux/userProfile/userProfileSlice';

const EachProductTile = ({
  mode, product,
}) => {
  const { id, image, title, price } = product;
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.userProfile.likes);
  const isLiked = likes.some((product) => product.id == id);

  const handleProductLike = () => {
    if(isLiked) {
      dispatch(removeProductLike());
    } else {
      dispatch(likeProduct(product));
    }
  }
  return (
    <div className={`each-product-tile ${mode ? 'white-tile' : 'light-tile'}`}>
      <img src={image} alt="jewel" className="product-image" />
      <Link to={`/product/${id}`}>
        {title}
      </Link>
      <li className="product-price-li">
        {price}
      </li>
      <div className="like-cart-buttons">
        <button
          type="button"
          onClick={handleProductLike}
          className="product-like-button"
          aria-label="like-product"
        >
          { isLiked ? <TiHeart className="like-button-hearticon" /> : <TiHeartOutline className="like-button-hearticon" /> }
        </button>
        <button type="button" className="product-to-cart-button" aria-label="add-to-cart">
          <TiShoppingCart className="cart-button-icon" />
        </button>
      </div>
      <button type="button" className="product-book-now-button" aria-label="book-product">Add to Bookings</button>
    </div>
  );
};

EachProductTile.propTypes = {
  mode: PropTypes.bool.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default EachProductTile;
