import store from '@store';
import * as api from '@api';
import products from '@store/products/actions';
import initState, { types } from './state.js';

export default {
  change: params => {
    store.dispatch({
      type: types.SET,
      payload: { params },
    });
  },

  submit: async data => {
    store.dispatch({ type: types.SET, payload: { wait: true, errors: null } });
    try {
      const response = await api.users.login(data);
      const result = response.data.result;
      await products.save({ user: result.user, token: result.token });

      store.dispatch({ type: types.SET, payload: initState });
      return result;
    } catch (e) {
      if (e.response && e.response.data && e.response.data.error) {
        store.dispatch({
          type: types.SET,
          payload: { wait: false, errors: e.response.data.error.data.issues },
        });
      } else {
        throw e;
      }
    }
  },
};
