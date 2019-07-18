import { INCREMENT_TEST_NUMBER, LOAD_ARTICLE } from '../actions/types'
import Constants from '../constants'

const initialState = {
    number: 431,
    article: {
        imagePath: require('../images/motorcycle_full.jpg'),
        titleText: Constants.titleText,
        subTitleText: Constants.subTitleText,
    }
};

export default function rootReducer (state = initialState, action) {
    switch(action.type) {
        case INCREMENT_TEST_NUMBER: 
            return Object.assign({}, state, {
                number: state.number + 1
            })
        case LOAD_ARTICLE :
            return Object.assign({}, state.article, {
                imagePath: action.payload.article.imagePath,
                titleText: action.payload.article.titleText,
                subTitleText: action.payload.article.subTitleText,
            })
        default:
            return state;
    }
}