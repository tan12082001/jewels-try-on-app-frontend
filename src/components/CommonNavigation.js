import { useSelector } from 'react-redux';
import LogoImage from '../assets/tryewels.png';

const CommonNavigation = () => {
  const user = useSelector((state) => state.userAuth.user);

  return (
    <div className="app-common-navigation">
      <img src={LogoImage} className="navbar-logo" alt="logo" />
      <div className="common-nav-list">
        { !user
          ? (<div className="google-signin-button">SignIn</div>)
          : (
            <div className="common-nav-items">
              <div className="user-profile-icon">MyProfile</div>
              <div className="user-logout-button">Logout</div>
            </div>
          )}
      </div>
    </div>
  );
};

export default CommonNavigation;
