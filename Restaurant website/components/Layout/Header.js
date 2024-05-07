import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <nav className="navbar">
            <div className="navbar-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="#000" d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 16H5V6h14v12z"/>
  <path fill="#000" d="M9 15h6v2H9zM9 11h6v2H9z"/>
</svg>

𝓨𝓾𝓶𝓶𝔂 𝓗𝓾𝓽
</div>

                <ul className="navbar-links">
                    <li className="navbar-link">
                        <Link to="/" className="nav-link" activeClassName="active">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path fill="#000" d="M12 21l-12-18h24z" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li className="navbar-link">
                        <Link to="/Menu" className="nav-link" activeClassName="active">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path fill="#000" d="M18 4h-2V3H8v1H6c-1.11 0-1.99.89-1.99 2L4 19c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 15H6v-7h12v7zM6 5h12v1H6V5z" />
                            </svg>
                            Menu
                        </Link>
                    </li>
                    <li className="navbar-link">
                        <Link to="/Contact" className="nav-link" activeClassName="active">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path fill="#000" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.12-15.88c-1.77-.16-3.39.83-4.39 2.27-.6.91-1.18 2.72-1.49 4.86-.02.18-.04.37-.04.57h11.06c0-.2-.02-.39-.04-.57-.31-2.14-.89-3.95-1.49-4.86-1-1.44-2.62-2.43-4.61-2.3z" />
                            </svg>
                            Contact
                        </Link>
                    </li>
                    <li className="navbar-link">
                        <HeaderCartButton onClick={props.onShowCart} />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
