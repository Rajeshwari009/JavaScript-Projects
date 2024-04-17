
import { configureStore } from "@reduxjs/toolkit";



const counterReducer= (state = {counter:0}, action )=> {
    if(action.type === "Increment"){
      return {...state,  counter:state.counter +1}
    }
    if (action.type=== "Decrement"){
       return  {...state, counter: state.counter -1}
    }
    return state

}

const store= configureStore({reducer:{counter: counterReducer}})

const counterSubscriber = ()=> {
    const latestState=  store.getState()
    console.log(latestState)
}


store.subscribe(counterSubscriber)

store.dispatch({type:"Increment"})
store.dispatch({type:"Decrement"})


export default store; 