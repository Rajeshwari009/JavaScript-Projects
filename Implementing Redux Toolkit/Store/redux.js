
import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState= {counter:0, showToggle:true }

const counterSlice =createSlice({
  name:"counter",
  initialState,
  reducers:{
    Increment(state) { state.counter ++},
    Decrement(state) { state.counter--},
    Increase(state,action) {state.counter= state.counter + action.amount},
    toggle(state) {state.showToggle= !state.showToggle},


  }
})


const store= configureStore({reducer:{counter: counterSlice.reducer}})



export default store; 