import React, { Component } from 'react';
import Page from './page';
import { connect } from 'react-redux';

class IAppBar extends Component {
  constructor(props){
      super(props);

      this.state = {
          text: '',
      };

      this.onChangeText = this.onChangeText.bind(this);
      this.onChangeSelection = this.onChangeSelection.bind(this);
  }

  onChangeText(text){
      this.setState({ text });
  }

  onChangeSelection(text){

  }

  render(){   
    const { text } = this.state; 
    const { suggestions } = this.state;   
  
      return (
         <Page 
            text={text}
            suggestions={suggestions}
            onChangeText={this.onChangeText}
            onChangeSelection={this.onChangeSelection}
         />
      )
    };
  }

const mapStateToProps = () => {
  return{
        // suggestions: state.suggestions,
  };
};



export default connect(mapStateToProps)(IAppBar);



