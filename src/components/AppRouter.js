import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListPage from '../pages/ListPage';
import BookingPage from '../pages/BookingPage';
import LandingPage from '../pages/LandingPage';
import ContactPage from '../pages/ContactPage';
import MyBookingsPage from '../pages/MyBookingsPage';
import OrdersPage from '../pages/OrdersPage';
import FavouritesPage from '../pages/FavouritesPage';
import DetailsPage from '../pages/DetailsPage';
import NavigationBar from './NavigationBar';
import SigninPage from '../pages/SignInPage';
import MyProfilePage from '../pages/ProfilePage';
import CommonNavigation from './CommonNavigation';

const AppRouter = () => {
  const user = useSelector((state) => state.userAuth.user);

  return (
    <BrowserRouter>
      <>
        {user ? (
          <>
            <CommonNavigation />
            <div className="sidenav-and-main-content-div-outer">
              <NavigationBar />
              <div className="app-main-content-outer">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/signin" element={<SigninPage />} />
                  <Route path="/home" element={<ListPage />} />
                  <Route path="/details" element={<DetailsPage />} />
                  <Route path="/bookTryOn" element={<BookingPage />} />
                  <Route path="/myFavourites" element={<FavouritesPage />} />
                  <Route path="/myOrders" element={<OrdersPage />} />
                  <Route path="/myBookings" element={<MyBookingsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/myprofile" element={<MyProfilePage />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <>
            <CommonNavigation />
            <Routes>
              <Route path="/" element={<ListPage />} />
            </Routes>
          </>
        )}
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
