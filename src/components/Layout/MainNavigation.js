import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';
import { useHistory } from 'react-router';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const userIsLogged = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/login');
  };
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!userIsLogged && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {userIsLogged && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {userIsLogged && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
