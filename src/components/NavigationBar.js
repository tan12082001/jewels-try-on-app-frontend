import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const navLinks = [
    {
      to: '/',
      label: 'Models',
    },
    {
      to: '/bookTryOn',
      label: 'BookTryOn',
    },
    {
      to: 'myFavourites',
      label: 'Favourites',
    },
    {
      to: 'myOrders',
      label: 'My Orders',
    },
    {
      to: 'myBookings',
      label: 'My Bookings',
    },
    {
      to: 'contact',
      label: 'Contact',
    },
  ];

  return (
    <div className="navigation-bar-outer">
      {navLinks.map(({
        to, label,
      }) => (
        <div className="navigation-elements" key={to}>
          <Link
            to={to}
          >
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
