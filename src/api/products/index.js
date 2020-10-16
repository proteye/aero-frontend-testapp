import Common from '@api/common';

export default class Products extends Common {
  constructor(api, path = '/aero-frontend/test-task') {
    super(api, path);
  }

  fetchList() {
    return this.http.get(`${this.path}/PRODUCTS_SUCCESS`);
  }

  favSuccess(data) {
    return this.http.get(`${this.path}/FAVORITE_SUCCESS`);
  }

  favFailed(data) {
    return this.http.get(`${this.path}/FAVORITE_FAIL`);
  }

  filterSuccess(data) {
    return this.http.get(`${this.path}/FILTER_SUCCESS`);
  }

  filterFailed(data) {
    return this.http.get(`${this.path}/FILTER_FAIL`);
  }
}
