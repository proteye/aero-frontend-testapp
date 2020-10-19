import store from '@store';
import products from '@store/products/actions';
import initState, { types } from './state.js';

export default {
  change: params => {
    store.dispatch({
      type: types.SET,
      payload: { params },
    });
  },

  clear: async () => {
    store.dispatch({
      type: types.SET,
      payload: { ...initState },
    });
    await products.fetchList();
  },

  submit: async params => {
    await products.filterChange(params);
  },
};
