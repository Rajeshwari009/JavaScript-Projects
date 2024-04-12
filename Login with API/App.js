import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthForm from "./components/Signup/AuthForm";
import DummyWelcome from "./Layout/DummyWelcome";
import { Switch } from "react-router-dom";
import Navbar from "./NavBar/NavBar";

function App() {
  return ( 
    <Router>
       <Navbar/>
   
      <Switch>
        <Route exact path="/">
          <AuthForm />
        </Route>
        <Route exact path="/welcome">
          <DummyWelcome />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
