import { useSelector } from 'react-redux';
import EachProductTile from '../components/EachProductTile';

const OrdersPage = () => {
  const cartItems = useSelector((state) => state.userProfile.cartItems);
  const mode = useSelector((state) => state.userAuth.mode);
  const totalAmount = cartItems.reduce((total, product) => total + parseFloat(product.price), 0);

  return (
    <div className="orders-page-outer">
      <h2>My Cart</h2>
      <div className="cart-products-inner-div">
        {cartItems.map((product) => {
          console.log(`Liked product id is: ${product.id}`);
          return (
            <EachProductTile
              mode={mode}
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
      <div className="confirm-products-order">
        <div className="products-amount-div">
          <h3>Total Amount </h3>
          <div className="amount-in-number">
            {totalAmount.toFixed(2)}
          </div>
        </div>
        <button type="button" className="order-products-button">Proceed Order</button>
      </div>
    </div>
  );
};

export default OrdersPage;
