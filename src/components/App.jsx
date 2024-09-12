import {  useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Suspense, lazy, useEffect } from 'react';
import { useAuth } from 'hooks';
import { refreshUser } from './../redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'))
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path="*"
                element={
                  <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={
                    <HomePage />} />
                  }
              />
            </Routes>
          </Suspense>
        </Router>
    </div>
  );
};