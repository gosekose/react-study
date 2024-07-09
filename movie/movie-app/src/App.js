import './App.css';
import { useState } from 'react';
import axois from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';



function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = () => {
    console.log(title, body);
    axois.post('http://localhost:3030/posts', {
      title: title,
      body: body
    })
  }

  return (
    <Router>
      <div className="mb-3">
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">Home</Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      </nav>
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
          <div className="container">
            <h1>Create Blog Post</h1>
            <div className='mb-3'>
            <label className='form-label'>Title</label>
            <input 
              className="form-control"
              value={title}
              onChange={ (event) => {
                setTitle(event.target.value)
                console.log(event.target.value)
              }}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Body</label>
              <textarea 
              className="form-control"
              value={body}
              onChange={ (event) => {
                setBody(event.target.value)
                console.log(event.target.value)
              }}
              rows='20'
              />
            </div>
            <button 
            className='btn btn-primary'
            onClick={ onSubmit }
            >
              Post
              </button>
          </div>
        }
        >
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
