import Common from '@api/common';

export default class Products extends Common {
  constructor(api, path = '/aero-frontend/test-task') {
    super(api, path);
  }

  fetchList() {
    return this.http.get(`${this.path}/PRODUCTS_SUCCESS`);
  }

  favSuccess(data) {
    return this.http.put(`${this.path}/FAVORITE_SUCCESS`, data);
  }

  favFailed(data) {
    return this.http.put(`${this.path}/FAVORITE_FAIL`, data);
  }

  filterSuccess(data) {
    return this.http.put(`${this.path}/FILTER_SUCCESS`, data);
  }

  filterFailed(data) {
    return this.http.put(`${this.path}/FILTER_FAIL`, data);
  }
}
