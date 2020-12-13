import { useState } from "react";

const initialState = {
    cartValue:[],
    
}
 

const HomeReducer = (state = initialState , action )=> {
   
    switch(action.type) {
        case 'addToCart':
            return  {
                ...state.cartValue, cartValue:state.cartValue.concat(action.payload)
               
            };
    
        
        default:
            return state
    }
}

export default HomeReducer;