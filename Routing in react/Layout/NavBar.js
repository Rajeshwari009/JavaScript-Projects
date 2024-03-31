

import React, { useState } from 'react';
import classes from '../Layout/NavBar.module.css';
import WebsiteLogo from '../UI/WebsiteLogo';
import HomeIcon from '../UI/HomeIcon';
import ProductIcon from '../UI/ProductIcon';
import AboutIcon from '../UI/AboutIcon';
import ContactIcon from '../UI/ContactIcon';
import CartButton from '../Layout/CartButton';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarContainer}>
        <h1 className={classes.logo}>MODERN INTERIORS{<WebsiteLogo />}</h1>
        <div className={classes.menuIcon} onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`${classes.navMenu} ${isOpen ? classes.active : ''}`}>
          <li className={classes.navItem}>
            <Link to="/" className={classes.navLink}>
              {<HomeIcon />} 
              Home
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/Product" className={classes.navLink}>
              {<ProductIcon />}
              Products
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/About" className={classes.navLink}>
              {<AboutIcon />}
              About
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/Contact" className={classes.navLink}>
              {<ContactIcon />}
              Contact  
            </Link>
          </li>
          <ul className={classes.navbarContainer}>
            <div>
              <div className={classes.cartButton}>
                <CartButton onAdd={props.onShow} />
              </div>
            </div>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;











// import React, { useState } from 'react';
// import classes from '../Layout/NavBar.module.css'
// import WebsiteLogo from '../UI/WebsiteLogo';
// import HomeIcon from '../UI/HomeIcon';
// import ProductIcon from '../UI/ProductIcon';
// import AboutIcon from '../UI/AboutIcon';
// import ContactIcon from '../UI/ContactIcon';
// import CartButton from '../Layout/CartButton'
// import { Link } from 'react-router-dom';



// const NavBar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={classes.navbar}>
//       <div className={classes.navbarContainer}>
//         <h1 className={classes.logo}>MODERN INTERIORS{<WebsiteLogo/>}</h1>
//         <div className={classes.menuIcon} onClick={toggleMenu}>
//           <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </div>
//         <ul className={`${classes.navMenu} ${isOpen ? classes.active : ''}`}>
//           <li className={classes.navItem}>
//             <Link href="/Home" className={classes.navLink}> {<HomeIcon/>}Home</Link>
//           </li>
//           <li className={classes.navItem}>
//             <a href="#" className={classes.navLink}>{<ProductIcon/>}Products</a>
//           </li>
//           <li className={classes.navItem}>
//             <a href="#" className={classes.navLink}>{<AboutIcon/>}About</a>
//           </li>
//           <li className={classes.navItem}>
//             <a href="#" className={classes.navLink}>{<ContactIcon/>}Contact</a>
//           </li>  
//           <ul className={classes.navbarContainer}>
//             <div>
//           <div className={classes.cartButton}>
//             <CartButton onAdd={props.onShow}/>
//           </div> 
//           </div>
//           </ul>
//         </ul>
        

//       </div>
//     </nav>
//   );
// };

// export default NavBar;
