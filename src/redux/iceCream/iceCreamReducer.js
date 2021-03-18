import {BUY_ICECREAM} from './iceCreamType'

const initialState = {
    numOfIcecreams : 15
}

 const icecreamReducer = (state= initialState,action) =>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default : return state
    }
}

export default icecreamReducer