import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers';

const store = {
  configure: preloadedState => {
    Object.assign(store, createStore(combineReducers(reducers), preloadedState));
  },
  /**
   * Assign from store instance after init()
   */
  // eslint-disable-next-line no-unused-vars
  dispatch: action => {},
  // eslint-disable-next-line no-unused-vars
  subscribe: listener => {},
  getState: () => {},
};

export default store;
