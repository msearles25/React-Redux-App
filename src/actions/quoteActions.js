export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILED = 'FETCH_QUOTE_FAILED';

export const fetchQuote = () => dispatch => {
    dispatch({ type: FETCH_QUOTE_START });
    fetch('https://quote-garden.herokuapp.com/quotes/random')
        .then(res => res.json())
        .then(res => 
            dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res}))
        .catch(err => 
            dispatch({ type: FETCH_QUOTE_FAILED, payload: err.response}))
}