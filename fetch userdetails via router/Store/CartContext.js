import React from "react";

const CartContext = React.createContext({
    items : [],
    totalPrice : 0 ,
    totalQuantity: 0,
    addItem: (item)=>{ },
    removeItem: (item)=>{ }
})
export default CartContext;



// import React from 'react'



// const CartContext= React.createContext({
//     items:[],
//     addItem:()=> {},
//     removeItem:()=> {},
//     totalprice:0,
//     totalQuantity:0,
//     price:0,
    
   

// });


// export default CartContext
