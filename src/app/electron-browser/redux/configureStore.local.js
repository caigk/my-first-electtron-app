import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';

// import createFetchMiddleware from 'redux-composable-fetch';
// import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
//import DevTools from './DevTools';
import { composeWithDevTools } from 'redux-devtools-extension';
import { assign } from 'lodash';

import LoggerMiddleware from './redux-logger';

// const FetchMiddleware = createFetchMiddleware({
//   afterFetch({ action, result }) {
//     debugger;
//     return result.json().then(data => {
//       return Promise.resolve({
//         action,
//         result: data,
//       });
//     });
//   },
// });

const finalCreateStore = composeWithDevTools(
  applyMiddleware(
    LoggerMiddleware,
    // ThunkMiddleware, 
    // FetchMiddleware
    ),
)(createStore);

const reducer = combineReducers(
  {
    root:rootReducer,
    routing: routerReducer
  });

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);
  //const store = createStore(reducer, initialState);
  return store;
}
