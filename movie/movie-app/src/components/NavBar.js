import {
    Link, NavLink
} from 'react-router-dom';

import routes from '../routes/Route';

const NavBar = () => {
    const navItems = routes.map((route) => {
        return (
            <li className='nav-item' key={route.path}>
                <NavLink key={route.path} className="nav-link" to={route.path} end>
                    {route.name}
                </NavLink>
            </li>
        );
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {navItems}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;