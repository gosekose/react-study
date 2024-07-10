import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import routes from './routes/Route';
import Toast from './components/Toast';
import { useDispatch, useSelector } from 'react-redux';
import useToast from './hooks/toast';
import { useEffect, useState } from 'react';
import { login } from './store/authSlice';
import LoadingSpinner from './components/LoadingSpinner';
import ProtectedRoute from './ProtectedRoute';
import { element } from 'prop-types';

function App() {
  const toasts = useSelector(state => state.toast.toasts);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const { deleteToast } = useToast();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      dispatch(login());
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
    <Router>
      <div className="mb-3">
        <NavBar>
        </NavBar>
        <div className="container mt-3">
          <Routes>
            {routes.map((route) => {
              return <Route
                key={route.key}
                path={route.path}
                element={route.auth ? <ProtectedRoute
                  key={route.key}
                  path={route.path}
                  element={route.element}
                /> : route.element}
              />;
            })}
          </Routes>
        </div>
        <Toast
          toasts={toasts}
          deleteToast={deleteToast}
        />
      </div>
    </Router>
  );
}

export default App;
