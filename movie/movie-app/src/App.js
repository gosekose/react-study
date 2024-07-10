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
import { useSelector } from 'react-redux';
import useToast from './hooks/toast';

function App() {
  const toasts = useSelector(state => state.toast.toasts);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const { deleteToast } = useToast();
  return (
    <Router>
      <div className="mb-3">
        <NavBar>
        </NavBar>
        <div className="container mt-3">
          <Routes>
            {routes.map((route) => {
              if (!isLoggedIn && route.auth) {
                console.log(route.path)
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Navigate to="/"/>}
                  />
                );
              }
              return <Route
                key={route.path}
                exact
                path={route.path}
                element={route.element}
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
