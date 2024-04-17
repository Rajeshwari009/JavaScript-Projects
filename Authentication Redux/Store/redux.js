
import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialCounterState= {counter:0, showToggle:true }

const counterSlice =createSlice({
  name:"counter",
  initialState: initialCounterState,
  reducers:{
    Increment(state) { state.counter ++},
    Decrement(state) { state.counter--},
    Increase(state,action) {state.counter= state.counter + action.payload},
    toggle(state) {state.showToggle= !state.showToggle},


  }
})

const initialauthState= {isAuthenticated: false}
const authSlice = createSlice({
  name:"authetication",
  initialState: initialauthState,
  reducers:{
    login(state) {state.isAuthenticated= true},
    logout (state) {state.isAuthenticated= false},
  }
  
})

const store= configureStore({reducer:
  {counter: counterSlice.reducer,
    auth: authSlice.reducer
}})

export const counterActions= counterSlice.actions
export const authActions= authSlice.actions

export default store; 