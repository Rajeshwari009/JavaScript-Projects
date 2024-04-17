
import { createSlice } from "@reduxjs/toolkit";

const  uiInitialState= {cartIsvisible : false}

const uiSlice= createSlice({
    name: "ui",
    initialState: uiInitialState,
    reducers:{
        toggle (state){state.cartIsvisible = !state.cartIsvisible},

    }

})

export const uiActions = uiSlice.actions

export default uiSlice;
