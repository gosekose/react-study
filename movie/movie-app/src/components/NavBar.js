import {
    Link, NavLink
} from 'react-router-dom';

const NavBar = () => {

    const menu = [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/blogs',
            name: 'Blogs',
        },
        {
            path: '/admin',
            name: 'Admin',
        },
    ]

    const navItems = menu.map((route) => {
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