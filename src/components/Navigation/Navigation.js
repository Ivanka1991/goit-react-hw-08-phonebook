import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/aut';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" exact>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
