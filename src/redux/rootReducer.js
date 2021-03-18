import {combineReducers} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import icecreamReducer from './iceCream/iceCreamReducer'
import usersReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: usersReducer
})

export default  rootReducer