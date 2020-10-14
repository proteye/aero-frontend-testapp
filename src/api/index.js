import axios from 'axios';

const http = axios.create({
  baseURL: '',
  headers: {},
});

http.configure = function ({ baseURL, tokenHeader }) {
  if (typeof baseURL !== 'undefined') {
    http.defaults.baseURL = baseURL;
  }
  if (typeof tokenHeader !== 'undefined') {
    http.defaults.tokenHeader = tokenHeader;
  }
};

http.setToken = function (token) {
  if (http.defaults.tokenHeader) {
    if (token) {
      console.log('SET TOKEN', token);
      this.defaults.headers[http.defaults.tokenHeader] = token;
    } else {
      delete this.defaults.headers[http.defaults.tokenHeader];
    }
  }
};

export default http;

/**
 * Reexport API modules
 */
import Products from '@api/products';
import Srr from '@api/ssr';

export const ssr = new Srr(http);
export const products = new Products(http);
