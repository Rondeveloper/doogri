import { INCREMENT_TEST_NUMBER, LOAD_ARTICLE } from './types' 

export function increaseNumber() {
    return {type: INCREMENT_TEST_NUMBER}
}

export function loadArticle(payload) {
    return { type: LOAD_ARTICLE, payload }
}

