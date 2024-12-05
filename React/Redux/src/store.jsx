/* eslint-disable react-refresh/only-export-components */
import {configureStore} from '@reduxjs/toolkit';

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialState = {count:0}

function counterReducer(state=initialState,action){
    switch(action.type){
        case INCREMENT:
            return{count: state.count+1}
        case DECREMENT:
            return{count:state.count-1}
        default:
            return state
    }
}

const store = configureStore({
    reducer: counterReducer
})

export default store
export {INCREMENT,DECREMENT}