import React, {useContext} from 'react'
import classes from '../Layout/CartButton.module.css'
import CartIcon from '../Store/CartIcon'
import CartContext from '../Store/CartContext'



const Cart = (props) => {
  const ctx= useContext(CartContext)
  
    
  return (
    <div>
      <div>
          <button onClick={props.onAdd} className={classes["cart-button"]}>
            <span><CartIcon/></span>
            <span> Your Cart: </span>
            <span>{ctx.totalQuantity}</span>
          </button>
        </div>
    </div>
  )
}

export default Cart



// let quantity= 0;
  // ctx.items.forEach(item => {
  //   quantity=  quantity + Number(item.quantity)
  
  // } 
  //  ) 