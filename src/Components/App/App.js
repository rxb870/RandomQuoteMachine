import React from 'react';
import { getQuoteAction } from '../../actions/getQuoteAction';
import { connect } from 'react-redux';
import ReactFCCtest from 'react-fcctest';
import QuoteBox from '../QuoteBox/QuoteBox';


const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
];

class App extends React.Component {

  componentDidMount() {
    this.props.getQuoteAction();
  }


  render() {
    return (
      <div>
        <QuoteBox quote={this.props.quote} author={this.props.author} color={this.props.color} getQuoteAction={this.props.getQuoteAction} />
        <ReactFCCtest />
      </div>
    );
  }
}

// Redux code:


// we return the an object that we build, pass in the value from state (from the reducer) 
// for whatever key we desire. This is how we build the state on Redux store, then can access 
// that from the component's props for whichever component we connect (in this case, App)
const mapStateToProps = (state) => {
  return {
    quote: state.quote.quote,
    author: state.quote.author, //Need to delineate like this as can't pass an object to props
    color: state.color
  }
}

//how we give component props the store.dispatch function. This allows us to change state on the redux store
const mapDispatchToProps = (dispatch) => {
  return {
    getQuoteAction: () => { dispatch(getQuoteAction()) }  //returning which functions to map to the component
  }
}


//connect returns a higher order component which then wraps App. 
//This is how we connect state to props for App component.
export default connect(mapStateToProps, mapDispatchToProps)(App);
