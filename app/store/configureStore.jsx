import * as redux from 'redux';
import thunk from 'redux-thunk';

//import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers'

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({});

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
