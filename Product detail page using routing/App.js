import "./App.css";
import React, { useState } from "react";
// import NavBar from "./Layout/NavBar";
import ProductArray from "./components/ProductArray";
import MainCart from "./Cart/MainCart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";
import NavWrap from "./Pages/NavWrap";


function App() {
  const [showCart, setShowCart] = useState(false);


  const cartShowHandler = () => {
    setShowCart(true);
  };
  const cartCloseHandler = () => {
    setShowCart(false);
  };

  return (
    <Router>
    <NavWrap onShow={cartShowHandler}>
    
      <Switch>
        <Route path="/" exact> <HomePage/></Route>
          <Route path="/About"> <About /></Route> 
          <Route path="/Product" exact><ProductArray /> </Route>
          <Route path="/Contact"><Contact /></Route>
          <Route path="/Product/:productid"> <ProductDetails/></Route>
      </Switch>

      {/* <NavBar onShow={cartShowHandler} /> */}
      {showCart && <MainCart onClose={cartCloseHandler}/>}
   
   
    </NavWrap>
    </Router>
  );
}

export default App;
