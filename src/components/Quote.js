import React from 'react';

// redux
import { connect } from 'react-redux';

import  { fetchQuote } from '../actions/quoteActions';

import Loader from 'react-loader-spinner'

const Quote = props => {
    return (
        <div>
            {console.log(props)}
            <h1>A Penny for your Quotes!</h1>
            {props.loading &&  <Loader type="Puff" color="#00BFFF" height={100} width={100} />}
            {props.quote && !props.loading && <><p>{props.quote}</p><p>- {props.author}</p></>}
            <button onClick={props.fetchQuote}>Click for a Quote</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        author: state.author,
        loading: state.loading,
        error: state.error
    }
}

export default connect(
    mapStateToProps, 
    { fetchQuote })
    (Quote);