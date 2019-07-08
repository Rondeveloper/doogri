import { INCREMENT_TEST_NUMBER } from '../actions/types'

const initialState = {
    number: 431
};

export default function rootReducer (state = initialState, action) {
    switch(action.type) {
        case INCREMENT_TEST_NUMBER: 
            return Object.assign({}, state, {
                number: state.number + 1
            })
        default:
            return state;
    }
}