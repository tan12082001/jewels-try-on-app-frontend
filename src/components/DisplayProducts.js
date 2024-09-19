import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { fetchProducts } from '../redux/api';

const DisplayProducts = () => {
  const dispatch = useDispatch();
  const [currentText, setCurrentText] = useState('Earrings');
  const texts = [
    'Earrings',
    'Chains',
    'Anklets',
    'Bangels',
    'Bracelets',
    'Rings',
    'Leather Bags',
    'Key Chains',
  ];
  const products = useSelector((state) => state.products.products);
  const mode = useSelector((state) => state.userAuth.mode);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="listpage-inner">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`list-page-h2-heading ${mode ? 'dark-title' : 'light-title'}`}>
          Now Trending
          <span id="changing-product-titles">
            {' '}
            {currentText}
          </span>
        </h2>
      </motion.div>
      <ul className="tiles-div-outer">
        {products.map((product) => (
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
