import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
