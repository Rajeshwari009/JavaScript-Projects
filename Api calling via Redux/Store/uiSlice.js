
import { createSlice } from "@reduxjs/toolkit";


const  uiInitialState= {cartIsvisible : false, notification:null}

const uiSlice= createSlice({
    name: "ui",
    initialState: uiInitialState,
    reducers:{
        toggle (state){state.cartIsvisible = !state.cartIsvisible},
        showNotification(state,action){
            state.notification = {
                title: action.payload.title,
                status:action.payload.status,
                message: action.payload.message
            }
        }

    }

})

export const uiActions = uiSlice.actions

export default uiSlice;
