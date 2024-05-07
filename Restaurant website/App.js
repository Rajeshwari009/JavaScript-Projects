import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Home from './Pages/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './Pages/Contact'
import Footer from "./Pages/Footer";


 

function App() {

  const [cartIsShown, setCartIsShown]= useState(false)

  const showCartHandler = () =>{
    setCartIsShown(true)
  };

  const hideCartHandler= () =>{
    setCartIsShown(false)

  }


  return (
  
    <Router>
      {cartIsShown &&<Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>

      
        <Switch>
      <Route path='/' exact><Home/></Route>
      <Route path='/Menu' exact><Meals/></Route>
      <Route path='/Contact'><Contact/></Route>
      </Switch>

      <Footer/>
      </Router>
   
  );
}

export default App;
