const initialState = {
    isUserAuthorized: '',
    user:null
}

const SignupReducer = (state = initialState, action) => {

    switch (action.type){
        case "signUp":
            console.log(action.payload);
            return { 
                ...state,
                isUserAuthorized: true,
                user: action.payload 
            };
        default: 
           return state;
    }
}
export default SignupReducer;