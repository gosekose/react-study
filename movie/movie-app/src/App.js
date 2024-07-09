import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import routes from './routes/Route';

function App() {
  return (
    <Router>
      <div className="mb-3">
        <NavBar>
        </NavBar>
        <div className="container mt-3">
          <Routes>
            {routes.map((route) => {
              return <Route key={route.path} exact path={route.path} element={route.element} />;
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
