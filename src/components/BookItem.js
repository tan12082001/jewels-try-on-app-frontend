import { useSelector } from 'react-redux';
import EachProductTile from './EachProductTile';

const BookItem = () => {
  const toBookProducts = useSelector((state) => state.userProfile.bookings);
  const mode = useSelector((state) => state.userAuth.mode);

  return (
    <div className="book-item-outer">
      <h2>Book items</h2>
      <div className="book-products-inner-div">
        {toBookProducts.map((product) => {
          console.log(`Booked product id is: ${product.id}`);
          return (
            <EachProductTile
              mode={mode}
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
      <div className="confirm-booking-div-outer">
        <form>
          <div className="booking-form-elements">
            <label htmlFor="bookingPlace">
              <input type="text" id="bookingPlace" aria-label="Address" />
            </label>
          </div>
          <div className="booking-form-elements">For Choosing calender</div>
          <div className="booking-form-elements">for choosing time slot</div>
          <div className="booking-form-elements">For USer name</div>
          <div className="booking-form-elements">For selecting the local store</div>
          <div className="booking-form-elements">
            <button type="submit" className="confirm-bookings-button">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookItem;
