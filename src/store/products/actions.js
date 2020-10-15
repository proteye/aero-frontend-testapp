import store from '@store';
import * as api from '@api';
import initState, { types } from './state.js';

function prepareProducts(items) {
  if (!items || !items.length) {
    return [];
  }

  return items.map(item => {
    return { ...item, price: 49999, bonuses: 490, stars: 3 };
  });
}

const actions = {
  fetchList: async () => {
    store.dispatch({ type: types.SET, payload: { wait: true, errors: null } });
    try {
      const response = await api.products.fetchList();
      const result = response.data;
      if (result.status.includes('FAIL')) {
        throw result;
      }
      store.dispatch({
        type: types.SET,
        payload: {
          items: prepareProducts(result.data.products),
          count: result.data.products ? result.data.products.length : 0,
          wait: false,
        },
      });
      return result;
    } catch (e) {
      if (e.data && e.data.message) {
        store.dispatch({
          type: types.SET,
          payload: { wait: false, errors: e.data.message },
        });
      } else {
        throw e;
      }
    }
  },

  favAdd: async id => {
    store.dispatch({ type: types.SET, payload: { wait: true, errors: null } });
    try {
      const response =
        id === 2 ? await api.products.favFailed({ id }) : await api.products.favSuccess({ id });
      const result = response.data;
      if (result.status.includes('FAIL')) {
        throw result;
      }
      const { products } = store.getState();
      store.dispatch({
        type: types.SET,
        payload: {
          items: products.map(item => {
            if (item.id === id) {
              return { ...item, inFav: result.data.inFav };
            }
            return item;
          }),
          wait: false,
        },
      });
      return result;
    } catch (e) {
      if (e.data && e.data.message) {
        store.dispatch({
          type: types.SET,
          payload: { wait: false, errors: e.data.message },
        });
      } else {
        throw e;
      }
    }
  },

  filterChange: async params => {
    store.dispatch({ type: types.SET, payload: { wait: true, errors: null } });
    try {
      const response =
        params.length === 1
          ? await api.products.filterFailed(params)
          : await api.products.filterSuccess(params);
      const result = response.data;
      if (result.status.includes('FAIL')) {
        throw result;
      }
      store.dispatch({
        type: types.SET,
        payload: {
          items: prepareProducts(result.data.products),
          count: result.data.products ? result.data.products.length : 0,
          wait: false,
        },
      });
      return result;
    } catch (e) {
      if (e.data && e.data.message) {
        store.dispatch({
          type: types.SET,
          payload: { wait: false, errors: e.data.message },
        });
      } else {
        throw e;
      }
    }
  },
};

export default actions;
