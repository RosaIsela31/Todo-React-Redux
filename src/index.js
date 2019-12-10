import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Results from './components/results';
import Details from './components/details';


class App extends Component {
  render(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path='/details/:itemId' component={Details} />
            <Route path='/results' component={Results} />
            <Redirect from='/' to='/results' />
        </Switch>
    </BrowserRouter>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));

