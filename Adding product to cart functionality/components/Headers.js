
import classes from "./Headers.module.css";
import CartButton from "./CartButton";


const Headers = (props) => {





  return (
    <div>
      <header className={classes.headers}>
        <h1>E-COMMERCE WEBSITE</h1>
         <CartButton onAdd={props.onShowCart}/>
      </header>
    </div>
  );
};

export default Headers;
