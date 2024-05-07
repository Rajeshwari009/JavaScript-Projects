

import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { useContext } from 'react'
import CartContext from '../../Store/cart-context'




const HeaderCartButton =(props)=>{
    const cartCtx= useContext(CartContext)
  



    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart 
            </span>
            <span className={classes.badge}>
                {cartCtx.totalQuantity}
            </span>

        </button>
    )
}

export default HeaderCartButton;