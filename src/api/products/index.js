import Common from '@api/common';

export default class Products extends Common {
  constructor(api, path = '/aero-frontend/test-task') {
    super(api, path);
  }

  fetchList() {
    return this.http.get(`${this.path}/PRODUCTS_SUCCESS`);
  }

  // eslint-disable-next-line no-unused-vars
  favSuccess(data) {
    return this.http.get(`${this.path}/FAVORITE_SUCCESS`);
  }

  // eslint-disable-next-line no-unused-vars
  favFailed(data) {
    return this.http.get(`${this.path}/FAVORITE_FAIL`);
  }

  // eslint-disable-next-line no-unused-vars
  filterSuccess(data) {
    return this.http.get(`${this.path}/FILTER_SUCCESS`);
  }

  // eslint-disable-next-line no-unused-vars
  filterFailed(data) {
    return this.http.get(`${this.path}/FILTER_FAIL`);
  }
}
