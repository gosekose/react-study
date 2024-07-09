import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import routes from './routes/Route';
import Toast from './components/Toast';
import useToast from './hooks/toast';

function App() {
  const [toasts, addToast, deleteToast] = useToast();
  return (
    <Router>
      <div className="mb-3">
        <NavBar>
        </NavBar>
        <Toast
          toasts={toasts}
          deleteBlog={deleteToast}
        />
        <div className="container mt-3">
          <Routes>
            {routes.map((route) => {
              const Component = route.component
              return <Route
                key={route.path}
                exact
                path={route.path}
                element={<Component addToast={addToast} />}
              />;
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
