import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import EditPage from './pages/EditPage';

function App() {
  return (
    <Router>
      <div className="mb-3">
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <HomePage></HomePage>
              }>
            </Route>
            <Route
              path="/blogs"
              exact
              element={
                <ListPage></ListPage>
              }
            >
            </Route>
            <Route
              path="/blogs/create"
              exact
              element={
                <CreatePage></CreatePage>
              }
            >
            </Route>
            <Route
              path="/blogs/edit"
              exact
              element={
                <EditPage></EditPage>
              }
            >
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
