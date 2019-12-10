import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Results from './components/results';
import Details from './components/details';
import store from './redux/store';


class App extends Component {
  render(){
    return(
        <Provider store={store} >
            <BrowserRouter>
                <Switch>
                    <Route path='/details/:itemId' component={Details} />
                    <Route path='/results' component={Results} />
                    <Redirect from='/' to='/results' />
                </Switch>
            </BrowserRouter>
        </Provider>


    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));

