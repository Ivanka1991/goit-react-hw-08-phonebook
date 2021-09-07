import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AutNav/AuthNav';
import { authSelectors } from '../../redux/auth/index';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
