import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css'; // Import CSS module
import { useContext } from 'react';
import { AuthContext } from '../Store/AuthContext';


const Navbar = () => {
  const authCtx= useContext(AuthContext)
 

  return (
    <nav className={classes.navbar}> 
       <header className={classes.navbarBrand}>Expense Tracker</header> 
      <ul className={classes.navbarNav}>
        <li className={classes.navItem}> 
          {authCtx.isLoggedIn && <NavLink to="/welcome" className={classes.navLink}> 
            Home
          </NavLink>}
        </li>
        <li className={classes.navItem}> 
         {authCtx.isLoggedIn && <NavLink to="/profile" className={classes.navLink}> 
            Profile
          </NavLink>}
        </li>

        <li className={classes.navItem}> 
          {authCtx.isLoggedIn && <NavLink to="/contact" className={classes.navLink}> 
            Contact
          </NavLink>}
        </li>
        <li className={classes.navItem}> 
          {authCtx.isLoggedIn && <NavLink to="/logout" className={classes.navLink} onClick={authCtx.logout}  > 
            Logout
          </NavLink>}
        </li>
        <li className={classes.navItem}> 
          {!authCtx.isLoggedIn && <NavLink to="/" className={classes.navLink}> 
            Sign Up / Login 
          </NavLink>}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
