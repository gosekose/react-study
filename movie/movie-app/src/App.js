import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import routes from './routes/Route';
import Toast from './components/Toast';
import { useSelector } from 'react-redux';
import useToast from './hooks/toast';

function App() {
  const toasts = useSelector(state => state.toast.toasts);
  const { deleteToast } = useToast();
  return (
    <Router>
      <div className="mb-3">
        <NavBar>
        </NavBar>
        <div className="container mt-3">
          <Routes>
            {routes.map((route) => {
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
