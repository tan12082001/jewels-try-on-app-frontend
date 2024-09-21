import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { fetchProducts } from '../redux/api';
import EachProductTile from './EachProductTile';

const DisplayProducts = () => {
  const dispatch = useDispatch();
  // const [currentText, setCurrentText] = useState('Earrings');
  // const texts = [
  //   'Earrings',
  //   'Chains',
  //   'Anklets',
  //   'Bangels',
  //   'Bracelets',
  //   'Rings',
  //   'Leather Bags',
  //   'Key Chains',
  // ];
  const products = useSelector((state) => state.products.products);
  const mode = useSelector((state) => state.userAuth.mode);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div className="listpage-inner">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`list-page-h2-heading ${mode ? 'dark-title' : 'light-title'}`}>
          Now Trending
          {/* <span id="changing-product-titles">
            {' '}
            {currentText}
          </span> */}
        </h2>
      </motion.div>
      <ul className="tiles-div-outer">
        {products.map((product) => {
          console.log(`product id is: ${product.id}`);
          return (
            <EachProductTile
              mode={mode}
              key={product.id}
              product={product}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayProducts;
