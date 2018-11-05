import axios from 'axios';
import ENV from 'helpers/env';

export class Api {
  constructor(options) {
    const { baseUrl, authToken } = options;

    this.http = axios.create({
      baseUrl,
    });

    if (authToken) {
      this.http.interceptors.request.use(async (config) => {
        const cfg = Object.assign({}, config, {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        });

        return cfg;
      }, Promise.reject);
    }
  }

  get(url = '', config = {}) {
    return this.http.get(url, config);
  }

  post(url = '', data = {}, config = {}) {
    return this.http.post(url, data, config);
  }

  patch(url = '', data = {}, config = {}) {
    return this.http.patch(url, data, config);
  }

  put(url = '', data = {}, config = {}) {
    return this.http.put(url, data, config);
  }

  delete(url = '', data = {}, config = {}) {
    return this.http.delete(url, data, config);
  }
}

export default new Api({
  baseUrl: ENV.YELP_API_ROOT,
  authToken: ENV.YELP_API_KEY,
});
