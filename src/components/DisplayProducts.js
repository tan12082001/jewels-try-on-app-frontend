import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/api';

const DisplayProducts = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const mode = useSelector((state) => state.userAuth.mode);
  const repeatedproducts = [...products, ...products, ...products];

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div className="listpage-inner">
      <h2 className={`list-page-h2-heading ${mode ? 'dark-title' : 'light-title'}`}>Now Trending</h2>
      <ul className="tiles-div-outer">
        {repeatedproducts.map((product) => (
          <div className={`each-product-tile ${mode ? 'white-tile' : 'light-tile'}`} key={product.id}>
            <img src={product.image} alt="jewel" className="product-image" />
            <li>
              Title:
              {product.title}
            </li>
            <li>
              Price:
              {product.price}
            </li>
            <li>
              Description:
              {product.description}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DisplayProducts;
