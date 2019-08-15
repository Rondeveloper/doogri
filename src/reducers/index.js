import { INCREMENT_TEST_NUMBER, LOAD_ARTICLE } from '../actions/types'
import Constants from '../constants'

const initialState = {
    number: 431,
    article: {
        imageUri: Constants.trk502x,
        title: Constants.title,
        subtitle: Constants.subtitle,
        longSubtitle: Constants.longSubtitle
    }
};

export default function rootReducer (state = initialState, action) {
    switch(action.type) {
        case INCREMENT_TEST_NUMBER: 
            return Object.assign({}, state, {
                number: state.number + 1
            })
        case LOAD_ARTICLE :
            //console.log(action.payload.imageUri) 
            return Object.assign({}, state, {
                article: action.payload
            })
        default:
            return state;
    }
}