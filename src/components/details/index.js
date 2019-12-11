import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findCurrentItem from '../../redux/actions/findCurrentItem';

class Details extends Component {
  componentDidMount(){
      this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
  }

  render(){
      const { currentItem } = this.props; 
      
      return (
         <Page 
            currentItem={currentItem} 
            goTo={(path) => {
                this.props.history.push(path);
            }}

         />
      )
    };
  }


const mapStateToProps = (state) => { 
    return{
        currentItem: state.currentItem,
    };
};

// const wrapper = connect(mapStateToProps);
// const component = wrapper(Results);
const mapDispatchToProps = {
    findCurrentItem,
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Details) 
);

// How implement react-redux in component's react
 
// with connect we can connect the component with the state. Need two arguments, the first one is mapStateToProps, the second one is mapDispatchToProps

