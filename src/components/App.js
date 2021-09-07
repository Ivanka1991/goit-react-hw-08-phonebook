import { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PrivateRoute from './PrivateRoute/PriveteRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import { authOperations } from 'redux/auth';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
