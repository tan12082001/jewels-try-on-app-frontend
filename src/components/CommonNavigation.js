import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import LogoImage from '../assets/tryewels.png';
import { logOutUser } from '../redux/api';
import { setLightDarkMode } from '../redux/userAuth/userAuthSlice';

const CommonNavigation = () => {
  const user = useSelector((state) => state.userAuth.user);
  const mode = useSelector((state) => state.userAuth.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserLogout = () => {
    dispatch(logOutUser());
    navigate('/');
  };

  const handlePageMode = () => {
    dispatch(setLightDarkMode());
  };

  return (
    <div className="app-common-navigation">
      <img src={LogoImage} className="navbar-logo" alt="logo" />
      <div className="common-nav-list">
        { !user
          ? (
            <>
              <div className="google-signin-button">SignIn</div>
              <button type="button" className="light-dark-mode-button">switch</button>
            </>
          )
          : (
            <div className="common-nav-items">
              <div className="user-landing-page" key="/">
                <Link to="/">Tryewels</Link>
              </div>
              <div className="user-profile-icon" key="/myprofile">
                <Link to="/myprofile">MyProfile</Link>
              </div>
              <button type="button" className="user-logout-button" onClick={handleUserLogout}>Logout</button>
              <button type="button" className="light-dark-mode-button" onClick={handlePageMode} aria-label="light-dark-mode-toggle">{mode ? <FaToggleOn className="toggle-on-icon" /> : <FaToggleOff className="toggle-off-icon" />}</button>
            </div>
          )}
      </div>
    </div>
  );
};

export default CommonNavigation;
