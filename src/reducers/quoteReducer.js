import {
    FETCH_QUOTE_START ,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAILED
} from '../actions/quoteActions';

const initialState ={
    quote: null,
    author: null,
    loading:  false,
    error: ''
}

const quoteReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_QUOTE_START:
            return {
                ...state, 
                loading: true
            }
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state, 
                quote: action.payload.quoteText,
                author: action.payload.quoteAuthor,
                loading: false,
                error: ''
            }
        case FETCH_QUOTE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default quoteReducer;