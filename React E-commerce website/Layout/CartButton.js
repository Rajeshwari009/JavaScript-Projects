import React, {useContext} from 'react'
import classes from '../Layout/CartButton.module.css'
import CartIcon from '../Store/CartIcon'
import CartContext from '../Store/CartContext'
import { AuthContext } from '../Store/AuthContext'



const Cart = (props) => {
  const ctx= useContext(CartContext)
  const authCtx= useContext(AuthContext)
  
    
  return (
    <div>
      <div>
          <button onClick={props.onAdd} className={classes["cart-button"]}>
            <span><CartIcon/></span>
            <span> Your Cart: </span>
           { authCtx.isLoggedIn && <span>{ctx.totalquantity}</span>}
           {!authCtx.isLoggedIn && <span>{0}</span>}
           
          </button>
        </div>
    </div>
  )
}

export default Cart





