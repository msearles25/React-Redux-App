import React from 'react';

// redux
import { connect } from 'react-redux';

import { fetchQuote } from '../actions/quoteActions';

import Loader from 'react-loader-spinner'

const Quote = props => {
    return (
        <div className='quoteBox'>
            {console.log(props)}
            <h1>A Penny for your Quotes!</h1>
            <div className='quote'>
                {!props.loading && !props.quote && <p>Get a quote!</p>}
                {props.loading && <Loader type="Puff" color="#b95f2a" height={50} width={50} />}
                {props.quote && !props.loading && <><p>{props.quote}</p><p>- {props.author}</p></>}
            </div>
            <button className='btn' onClick={props.fetchQuote}>Click for a Quote</button>
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