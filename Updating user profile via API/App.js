import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthForm from "./components/Signup/AuthForm";
import DummyWelcome from "./Layout/DummyWelcome";
import { Switch } from "react-router-dom";
import Navbar from "./NavBar/NavBar";
import Profile from "./Pages/Profile";
import { useContext } from "react";
import { AuthContext } from "./Store/AuthContext";
import Forget from "./Pages/Forget";


function App() {
  const authCtx= useContext(AuthContext)
  return ( 
    <Router>
       <Navbar/>
   
      <Switch>
        <Route exact path="/">
         <AuthForm />
        </Route>
        <Route exact path="/welcome">
        {authCtx.isLoggedIn && <DummyWelcome/>}
        </Route>
        <Route  path="/profile">
        {authCtx.isLoggedIn && <Profile />}
        </Route>
        <Route path= "/forgot">
          <Forget/>
        </Route>
        <Route to='/logout'>
          <AuthForm/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
