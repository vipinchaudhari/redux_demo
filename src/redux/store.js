import {foodReducer} from './reducers/food_reducers'
import {createStore,combineReducers} from 'redux'

const rootReducer = combineReducers({
    foodReducer:foodReducer
})

export const initStore = ()=> createStore(rootReducer);