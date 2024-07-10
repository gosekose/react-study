import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login, logout } from '../store/authSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
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
                    <li className='nav-item'>
                        <button
                            className='btn-link text-decoration-none'
                            onClick={() => {
                                if (isLoggedIn) {
                                    dispatch(logout());
                                } else {
                                    dispatch(login());
                                }
                            }}
                        >
                            {isLoggedIn ? 'Logout' : 'Login'}
                        </button>
                    </li>
                    {navItems}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;