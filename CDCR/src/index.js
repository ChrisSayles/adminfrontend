import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {HashRouter, Route, Switch, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import reducers from './reducers';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
  // Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'

// Containers
import Full from './containers/Full/'

// Views
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
         <Switch>
           <Route exact path="/login" name="Login Page" component={Login}/>
           <Route exact path="/register" name="Register Page" component={Register}/>
           <Route exact path="/404" name="Page 404" component={Page404}/>
           <Route exact path="/500" name="Page 500" component={Page500}/>
          <Route path="/" name="Home" component={Full}/>
        </Switch>
      </Router>
  </Provider>,
  document.getElementById('root')
);
