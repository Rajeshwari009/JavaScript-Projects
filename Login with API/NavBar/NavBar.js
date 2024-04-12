import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css'; // Import CSS module

const Navbar = () => {
  return (
    <nav className={classes.navbar}> {/* Use className={classes.navbar} */}
      <NavLink exact to="/" className={classes.navbarBrand}>Expense Tracker</NavLink> {/* Use className={classes.navbarBrand} */}
      <ul className={classes.navbarNav}> {/* Use className={classes.navbarNav} */}
        <li className={classes.navItem}> {/* Use className={classes.navItem} */}
          <NavLink to="/welcome" className={classes.navLink}> {/* Use className={classes.navLink} */}
            Home
          </NavLink>
        </li>
        <li className={classes.navItem}> {/* Use className={classes.navItem} */}
          <NavLink to="/about" className={classes.navLink}> {/* Use className={classes.navLink} */}
            About
          </NavLink>
        </li>
        <li className={classes.navItem}> {/* Use className={classes.navItem} */}
          <NavLink to="/contact" className={classes.navLink}> {/* Use className={classes.navLink} */}
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
