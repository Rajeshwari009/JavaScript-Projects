
import './App.css';
import React, {useState} from 'react';
import NavBar from './Layout/NavBar';
import ProductArray from './components/ProductArray';
import MainCart from './Cart/MainCart'
import CartContextProvider from './Store/CartContextProvider'
// import { Outlet } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import HomePage from './Pages/HomePage';
// import Root from './Pages/Root';


// const router = createBrowserRouter([
//   {path: '/', 
// element:<Root/>,
// children:[
//   {path:'/Home', 
//   element: <HomePage/>}]}
// ])


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
      <NavBar onShow={cartShowHandler} />
     {showCart && <MainCart onClose={cartCloseHandler}  />}
       
    <ProductArray/>
    </CartContextProvider>
  
  );
}

export default App;
