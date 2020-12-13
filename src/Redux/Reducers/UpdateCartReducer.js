import { useState } from "react";

const initialState = {
    units :0
}

const UpdateCartReducer = (state = initialState  , action )=> {
   console.log(state.units )
    switch(action.type) {
    
            
        case 'increaseProductQuantity':
            return {
                units : action.payload + 1
            }
        default:
            return state
    }
}

export default UpdateCartReducer;