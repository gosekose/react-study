import {
    Link
} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs/create">Blogs Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs/edit">Blogs Edit</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;