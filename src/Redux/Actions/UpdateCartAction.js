
export const Increase = (product) =>{
    console.log((product.units))
    return{
        type:'increaseProductQuantity',
        payload:product.units
        
    };
};