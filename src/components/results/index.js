import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Results extends Component {
  render(){
      const { suggestions } = this.props; 
      console.log(suggestions);
      
      return (
         <Page suggestions={suggestions} />
      )
    };
  }


const mapStateToProps = (state) => { 
    return{
        suggestions: state.suggestions
    };
};

// const wrapper = connect(mapStateToProps);
// const component = wrapper(Results);

export default connect(mapStateToProps)(Results) ;

// How implement react-redux in component's react
 
// with connect we can connect the component with the state. Need two arguments, the first one is mapStateToProps, the second one is mapDispatchToProps

