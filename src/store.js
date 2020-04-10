import { createStore, applyMiddleware} from 'redux';  //, compose 
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router' //, ConnectedRouter
import { createBrowserHistory } from 'history'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from 'reducers';
// import DevTools from 'dev-tools';

const history = createBrowserHistory()

/* function _applyMiddleware() {
  const middleware = [thunk, routerMiddleware(history)];
  // return applyMiddleware(...middleware);
  return composeWithDevTools(applyMiddleware(...middleware));
} */

const middlewares = [thunk, routerMiddleware(history)]

export default createStore( 
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

/* export default function configureStore(initialState) {
  const store = compose(
    _applyMiddleware(),
    // DevTools.instrument()
  )(createStore)(rootReducer, initialState);

  return store;
} */
