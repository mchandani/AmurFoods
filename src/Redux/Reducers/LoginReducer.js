const initialState = {
    isUserAuthorized: '',
   
}

const LoginReducer = (state = initialState, action) => {

    switch (action.type){
        case "login":  
            return { 
                isUserAuthorized : true,
                token: action.payload ,          
            };
       
        default: 
           return state;
    }
}
export default LoginReducer;