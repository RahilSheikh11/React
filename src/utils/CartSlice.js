import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            items:[],
        },

        reducers:{
            addItem : (state, action) => {
                state.items.push(action.payload);
            },
            removeItem: (state) => {
                state.item.pop();
            },
            clearCart: (state) => {
                state.item.length=0;
            },            
        },
    });

    export const {addItem, removeItem, clearCart} = CartSlice.actions;  
    export default CartSlice.reducer;