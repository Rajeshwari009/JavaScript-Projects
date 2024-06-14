import React, { useContext, useEffect, useReducer, useState } from 'react';
import CartContext from './CartContext';
import { AuthContext } from '../Store/AuthContext';

const defaultCartState = { items: [], totalPrice: 0, totalquantity: 0 };
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD-ITEM":
      const updatedTotalQuantityAdd = state.totalquantity + action.quantity;
      const updatedTotalPriceAdd = state.totalPrice + (action.item.price * action.quantity);

      const existingItemIndexAdd = state.items.findIndex(item => item.id === action.item.id);
      const existingItemAdd = state.items[existingItemIndexAdd];
      let updatedItemsAdd;
      let updatedItemAdd;
      if (existingItemAdd) {
        updatedItemAdd = { ...existingItemAdd, quantity: existingItemAdd.quantity + action.quantity };
        updatedItemsAdd = [...state.items];
        updatedItemsAdd[existingItemIndexAdd] = updatedItemAdd;
      } else {
        updatedItemAdd = { ...action.item, quantity: action.quantity };
        updatedItemsAdd = state.items.concat(updatedItemAdd);
      }
      return { ...state, items: updatedItemsAdd, totalPrice: updatedTotalPriceAdd, totalquantity: updatedTotalQuantityAdd };

    case "REMOVE-ITEM":
      const existingItemIndexRemove = state.items.findIndex(item => item.id === action.itemId);
      const existingItemRemove = state.items[existingItemIndexRemove];
      if (!existingItemRemove) {
        return state;
      }

      let updatedItemsRemove;
      let updatedTotalQuantityRemove;
      let updatedTotalPriceRemove;

      if (existingItemRemove.quantity === 1) {
        updatedItemsRemove = state.items.filter(item => item.id !== action.itemId);
        updatedTotalQuantityRemove = state.totalquantity - 1;
        updatedTotalPriceRemove = state.totalPrice - existingItemRemove.price;
      } else {
        updatedItemsRemove = [...state.items];
        updatedItemsRemove[existingItemIndexRemove] = { ...existingItemRemove, quantity: existingItemRemove.quantity - 1 };
        updatedTotalQuantityRemove = state.totalquantity - 1;
        updatedTotalPriceRemove = state.totalPrice - existingItemRemove.price;
      }
      return { ...state, items: updatedItemsRemove, totalPrice: updatedTotalPriceRemove, totalquantity: updatedTotalQuantityRemove };

    case "FETCH":
      if (!action.data) {
        return state;
      }
      return {
        ...state,
        items: action.data.items || [],
        totalPrice: action.data.totalPrice || 0,
        totalquantity: action.data.totalquantity || 0
      };

    default:
      return state;
  }
};


const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const [postData, setPostData] = useState(false);
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.userEmail;
  const userName = userEmail && userEmail.split('@')[0];
  const fetchUrl = `https://ecom--newauth-default-rtdb.firebaseio.com/ecom2/${userName}.json`;
  const isLoggedIn = authCtx.isLoggedIn;

  useEffect(() => {
    if (isLoggedIn) {
      fetch(fetchUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch cart data');
          }
          return response.json();
        })
        .then((data) => {
          dispatchCart({ type: 'FETCH', data });
        })
        .catch((error) => {
          console.error('Error fetching cart data:', error);
        });
    }
  }, [isLoggedIn, fetchUrl]);

  useEffect(() => {
    if (postData) {
      fetch(fetchUrl, {
        method: 'PUT',
        body: JSON.stringify({
          items: cartState.items,
          totalPrice: cartState.totalPrice,
          totalquantity: cartState.totalquantity
        }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => {
          setPostData(false);
          console.log(res);
        })
        .catch(error => {
          console.error('Error updating cart data:', error);
        });
    }
  }, [postData, cartState.items, cartState.totalPrice, cartState.totalquantity, fetchUrl]);

  useEffect(() => {
    // Clear cart data if a new user logs in
    const isNewUser = authCtx.userEmail !== userEmail;
    if (isNewUser) {
      dispatchCart({ type: 'FETCH', data: defaultCartState }); // Clear cart state
      setPostData(true); // Trigger post data to clear cart on the server
    }
  }, [authCtx.userEmail, userEmail]);

  const addCartItemHandler = (item, quantity) => {
    dispatchCart({ type: "ADD-ITEM", item: item, quantity: Number(quantity) });
    setPostData(true);
  };
  

  const removeCartItemHandler = (itemId) => {
    dispatchCart({ type: "REMOVE-ITEM", itemId: itemId });
    setPostData(true);
  };

  const value = {
    items: cartState.items,
    addItem: addCartItemHandler,
    RemoveItem: removeCartItemHandler,
    totalPrice: cartState.totalPrice,
    totalquantity: cartState.totalquantity
  };

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
