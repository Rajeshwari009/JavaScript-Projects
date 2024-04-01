import React, { useState } from 'react';
import classes from '../Layout/NavBar.module.css';
import WebsiteLogo from '../UI/WebsiteLogo';
import HomeIcon from '../UI/HomeIcon';
import ProductIcon from '../UI/ProductIcon';
import AboutIcon from '../UI/AboutIcon';
import ContactIcon from '../UI/ContactIcon';
import CartButton from '../Layout/CartButton';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

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
                </ul >
                <ul className={classes.navbar}>
                <div className={classes.cartButton}>
                    <CartButton onAdd={props.onShow} />
                </div>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
