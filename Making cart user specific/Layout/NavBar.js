import React, { useState, useContext } from 'react';
import classes from '../Layout/NavBar.module.css';
import WebsiteLogo from '../UI/WebsiteLogo';
import HomeIcon from '../UI/HomeIcon';
import ProductIcon from '../UI/ProductIcon';
import AboutIcon from '../UI/AboutIcon';
import ContactIcon from '../UI/ContactIcon';
import CartButton from '../Layout/CartButton';
import { NavLink } from 'react-router-dom';
import LoginIcon from '../UI/LoginIcon';
import { AuthContext } from '../Store/AuthContext';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const authCtx= useContext(AuthContext)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarContainer}>
                <h1 className={classes.logo}>MODERN INTERIORS<WebsiteLogo /></h1>
                <div className={classes.menuIcon} onClick={toggleMenu}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={`${classes.navMenu} ${isOpen ? classes.active : ''}`}>
                    <li className={classes.navItem}>
                        <NavLink to="/" className={classes.navLink}>
                            <HomeIcon />
                            Home
                        </NavLink>
                    </li>
                  
                    <li className={classes.navItem}>
                        <NavLink to="/Product" className={classes.navLink}>
                            <ProductIcon />
                            Products
                        </NavLink>
                    </li>
                    <li className={classes.navItem}>
                        <NavLink to="/About" className={classes.navLink}>
                            <AboutIcon />
                            About
                        </NavLink>
                    </li>
                    <li className={classes.navItem}>
                        <NavLink to="/Contact" className={classes.navLink}>
                            <ContactIcon />
                            Contact  
                        </NavLink>
                    </li>
                   {!authCtx.isLoggedIn&& <li className={classes.navItem}>
                        <NavLink to="/login" className={classes.navLink}> 
                        <LoginIcon /> 
                        Login
                        </NavLink>
                    </li>}
                   {authCtx.isLoggedIn && <li className={classes.navItem}>
                        <NavLink onClick= {authCtx.logout} to="/login" className={classes.navLink}  > 
                        <LoginIcon /> 
                        Logout 
                        </NavLink>
                    </li>}

                    
                  
                </ul >
                <ul  className={classes.navItem}>
                <div className={classes.cartButton}>
                   {authCtx.isLoggedIn && <CartButton onAdd={props.onShow} />}
                </div>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
