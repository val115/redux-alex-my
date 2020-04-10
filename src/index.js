import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter } from 'connected-react-router' //routerMiddleware, 
import { createBrowserHistory } from 'history'
// import thunk from 'redux-thunk'

import ErrorBoundry from 'components/error-boundry';
import StoreServices from 'store-services/store-services';
import { ServiceProvider } from 'components/service-context';
// import {composeWithDevTools} from 'redux-devtools-extension'

// import rootReducer from 'reducers'
// import App from 'components/app';
import routes from 'routes'
import store from './store';
// import configureStore from './store';


// const store = configureStore();

const storeServices = new StoreServices(); 
const history = createBrowserHistory()

/* const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)
 */
ReactDOM.render(

  <Provider store={store}>
    <ErrorBoundry> 
      <ConnectedRouter history={history}>
        <ServiceProvider value={storeServices}> 
          <Router>
            {/* <App /> */}
            { routes }
          </Router>,
        </ServiceProvider>
      </ConnectedRouter>
    </ErrorBoundry>  
 </Provider>, 
    
      
  document.getElementById('root')
);