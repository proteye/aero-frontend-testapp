import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers';

const store = {
  configure: preloadedState => {
    Object.assign(store, createStore(combineReducers(reducers), preloadedState));
  },
  /**
   * Assign from store instance after init()
   */
  dispatch: action => {},
  subscribe: listener => {},
  getState: () => {},
};

export default store;
