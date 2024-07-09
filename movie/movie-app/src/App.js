import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import BlogForm from './components/BlogForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="mb-3">
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route path="/" exact element={
              <div>
                Home Page
              </div>
            }></Route>
            <Route
              path="/blogs"
              exact
              element={
                <BlogForm></BlogForm>
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
