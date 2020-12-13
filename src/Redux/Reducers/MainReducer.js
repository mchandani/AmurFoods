import HomeReducer from './HomeReducer'
import UpdateCartReducer from './UpdateCartReducer'
import LoginReducer from './LoginReducer'
import SignupReducer from './SignupReducer'
import {combineReducers} from 'redux'

const MainReducer= combineReducers({
    home:HomeReducer,
    updateCart: UpdateCartReducer,
    LoginReducer,
    SignupReducer
    
})

export default MainReducer;