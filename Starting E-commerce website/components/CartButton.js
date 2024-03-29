import React, {useContext} from 'react'
import classes from "./Headers.module.css";
import CartIcon from './CartIcon'
import CartContext from './CartContext';



const Cart = (props) => {
  const ctx= useContext(CartContext)
  let quantity= 0;
  ctx.items.forEach(item => {
    quantity=  quantity + Number(item.quantity)
  } 

   )

    
  return (
    <div>
      <div>
          <button onClick={props.onAdd} className={classes["cart-button"]}>
            <span><CartIcon/></span>
            <span> Your Fruit Cart: </span>
            <span>{quantity}</span>
          </button>
        </div>
    </div>
  )
}

export default Cart
