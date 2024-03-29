import React from 'react'



const CartContext= React.createContext({
    items:[],
    addItems:()=> {},
    removeItems:()=> {},
    totalPrice:0,
    totalAmount:0,
   
   
    
   

});


export default CartContext
