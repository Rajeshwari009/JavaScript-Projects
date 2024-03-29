import React, {useState} from "react";
import "./App.css";
import Headers from "./components/Headers";
import classes from './components/Headers.module.css'
import AvailableItems from './components/AvailableItems'
import CartContextProvider from "./components/CartContextProvider";
import MainCart from "./components/Carting/MainCart";

function App() {
  
  const [showCart,setShowCart]=useState(false)

  const cartShowHandler=()=>{
    setShowCart(true)
  }
  const cartCloseHandler=()=>{
    setShowCart(false)
  }


  return (
    <CartContextProvider>
    <div className={classes.back}>
      <div >
   {showCart && <MainCart onClose={cartCloseHandler}></MainCart>}
    <Headers onShowCart={cartShowHandler}></Headers>
    <AvailableItems />
    </div>
    </div>
    </CartContextProvider>
  );
}

export default App;
