import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter= useSelector(state => state.counter.counter)
  const show= useSelector(state => state.counter.showToggle)
  const dispatch= useDispatch()
  const toggleCounterHandler = () => {
    dispatch({type:"toggle"})
  };

  const incrementHandler= () =>{
    dispatch({type:"Increment"})

  }

  const decrementHandler= ()=> {
    dispatch({type:"Decrement"})

  }

  const increase= ()=>{
    dispatch({type:"Increase", amount:5})
  }
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement </button>
      <button onClick={increase}>Increase by 5</button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
