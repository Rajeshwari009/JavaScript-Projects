import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter= useSelector(state => state.counter.counter)
  const dispatch= useDispatch()
  const toggleCounterHandler = () => {};

  const incrementHandler= () =>{
    dispatch({type:"Increment"})

  }

  const decrementHandler= ()=> {
    dispatch({type:"Decrement"})

  }
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement </button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
