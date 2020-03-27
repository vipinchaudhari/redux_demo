import { ADD_FOOD, DELETE_FOOD } from '../actions/types'
initialState = {
    foodList: []
}

export const foodReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case ADD_FOOD:
            return {
                ...state,
                foodList: state.foodList.concat({
                    key: Math.random() + new Date().getTime(),
                    food: action.food
                })
            }
        case DELETE_FOOD:
            return {
                ...state,
                foodList: state.foodList.filter((item) => {
                    return item.key != action.key
                })
            }
        default:
            return state;
    }
}
