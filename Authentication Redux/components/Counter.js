import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/redux';

const Counter = () => {
  const counter= useSelector(state => state.counter.counter)
  const show= useSelector(state => state.counter.showToggle)
  const dispatch= useDispatch()

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandler= () =>{
    dispatch(counterActions.Increment())

  }

  const decrementHandler= ()=> {
    dispatch(counterActions.Decrement())

  }

  const increase= ()=>{
    dispatch(counterActions.Increase(5))
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
