
import React, { useReducer } from "react";
import CartContext from "./CartContext";


const defaultCartState = { items : [] , totalPrice: 0, totalQuantity : 0 }


const cartReducer =(state,action)=>{
           
    if(action.type === "ADD_ITEM")
    {  
       const updateTotalPrice = state.totalPrice + action.item.price ; 
       const updateTotalQuantity = state.totalQuantity + 1 ; 
       
       const existingItemIndex = state.items.findIndex(item=> item.id === action.item.id ) ;
       const existingItem  = state.items[existingItemIndex];
       let updateItems;
       let updateItem 
       if(existingItem)
       { 
          updateItem = {...existingItem , quantity : existingItem.quantity + 1 } 
          updateItems = [...state.items]
          updateItems[existingItemIndex] =updateItem
       }
       else
       {
        const newItem = {...action.item , quantity : 1}  // item.quantity
         updateItems = state.items.concat(newItem)
       }
    
       return {items : updateItems , totalQuantity : updateTotalQuantity ,totalPrice : updateTotalPrice  }
    }
   

    return defaultCartState ; 
}

const CartContextProvider = (props) => {

    const[cartState , dispatchCart] = useReducer(cartReducer , defaultCartState) 

    const addCartItemHandler =(item) =>{
       dispatchCart({type : "ADD_ITEM" , item : item })

    }
    
   const value= { 
    items : cartState.items,
    totalPrice : cartState.totalPrice,
    totalQuantity : cartState.totalQuantity,
    addItem : addCartItemHandler
    }


  return (
    <CartContext.Provider  value = { value }>
      {props.children}
    </CartContext.Provider>
  )
}




export default CartContextProvider;




















// import React, { useReducer } from "react";
// import CartContext from "./CartContext";



// const defaultCartState = { items : [] , totalprice: 0, totalQuantity : 0 }


// const cartReducer =(state,action)=>{
           
//     if(action.type === "ADD_ITEM")
//     {  
//        const updateTotalPrice = state.totalprice + action.item.price ; 
//        const updateTotalQuantity = state.totalQuantity + 1 ; 
       
//        const existingItemIndex = state.items.findIndex(item=> item.id === action.item.id ) ;
//        const existingItem  = state.items[existingItemIndex];
//        let updateItems;
//        let updateItem 
//        if(existingItem)
//        { 
//           updateItem = {...existingItem , quantity : existingItem.quantity + 1 } 
//           updateItems = [...state.items]
//           updateItems[existingItemIndex] =updateItem
//        }
//        else
//        {
//         const newItem = {...action.item , quantity : 1}  // item.quantity
//          updateItems = state.items.concat(newItem)
//        }
    
//        return {items : updateItems , totalQuantity : updateTotalQuantity ,totalprice : updateTotalPrice  }
//     }
   

//     return defaultCartState ;
// }


// const CartContextProvider = (props) => {
//   const[cartState , dispatchCart] = useReducer(cartReducer , defaultCartState) 

//   const addCartItemHandler =(item) =>{
//      dispatchCart({type : "ADD_ITEM" , item : item })

//   }
  
//  const value= { 
//   items : cartState.items,
//   totalprice : cartState.totalprice,
//   totalQuantity : cartState.totalQuantity,
//   addItem : addCartItemHandler
//   }


// return (
//   <CartContext.Provider  value = { value }>
//     {props.children}
//   </CartContext.Provider>
// )
// }

// export default CartContextProvider;




//   //const [items, setItems] = useState([]);

//   // const addItemToCartHandler = (newItem) => {
//   //   setItems([...items, newItem]);
//   //   const existingItem= items.find((item)=> item.id===items.id)
//   //   if(existingItem){
//   //     setItems(...items.quantity)
//   //   }

//   // };


//   // const addItemToCartHandler = (newItem) => {
//   //   const existingItemIndex = items.findIndex((item) => item.id === newItem.id);

//   //   if (existingItemIndex !== -1) {
//   //     const updatedItems = [...items];
//   //     updatedItems[existingItemIndex].quantity += newItem.quantity;
//   //     setItems(updatedItems);
//   //   } else {
//   //     setItems((prevItems) => [...prevItems, newItem]);
//   //   }
//   // };

// //   const addItemToCartHandler = (newItem) => {
// //     setItems([...items, newItem])
// //     const existingItemIndex = items.findIndex((item) => item.id === newItem.id);
// //     if(newItem){
// //       setItems([...items, newItem]);
// //     }
// //     else if(existingItemIndex !== -1) {
// //       const updatedItems = [...items];
// //       updatedItems[existingItemIndex].quantity += newItem.quantity;
// //       setItems(updatedItems);
// //     }
// //   };
  


// //   const calculateTotalPrice = () => {
// //     return items.reduce((total, item) => total + item.price * item.quantity, 0);
// //   };

// //   const calculateTotalAmount = () => {
// //     return items.reduce((total, item) => total + item.quantity, 0);
// //   };

// //   const removeItemFromCartHandler = (itemId) => {
// //     const updatedItems = items.filter((item) => item.id !==itemId);
// //     setItems(updatedItems);
// //   };

// //   const cartContext = {
// //     items: items,
// //     addItems: addItemToCartHandler,
// //     totalPrice: calculateTotalPrice(),
// //     totalAmount: calculateTotalAmount(),
// //     price: 0,
// //     removeItems:removeItemFromCartHandler ,
// //   };

// //   return (
// //     <CartContext.Provider value={cartContext}>
// //       {props.children}
// //     </CartContext.Provider>
// //   );
// // };

// // export default CartContextProvider;
