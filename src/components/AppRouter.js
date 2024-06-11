import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from '../pages/ListPage';
import BookingPage from '../pages/BookingPage';
import LandingPage from '../pages/LandingPage';
import ContactPage from '../pages/ContactPage';
import MyBookingsPage from '../pages/MyBookingsPage';
import OrdersPage from '../pages/OrdersPage';
import FavouritesPage from '../pages/FavouritesPage';
import DetailsPage from '../pages/DetailsPage';
import NavigationBar from './NavigationBar';

const AppRouter = () => (
  <BrowserRouter>
    <>
      <NavigationBar />
      <div className="app-main-content-outer">
        <Routes>
          <Route path="/signin" element={<LandingPage />} />
          <Route path="/" element={<ListPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/bookTryOn" element={<BookingPage />} />
          <Route path="/myFavourites" element={<FavouritesPage />} />
          <Route path="/myOrders" element={<OrdersPage />} />
          <Route path="/myBookings" element={<MyBookingsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  </BrowserRouter>
);

export default AppRouter;
