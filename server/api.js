require('dotenv').config();
require('isomorphic-fetch');
const qs = require('qs');

const { YELP_API_KEY, YELP_API_ROOT } = process.env;

class Api {
  constructor(options) {
    const { baseUrl, authToken } = options;
    this.baseUrl = baseUrl;
    this.options = {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      }
    };

    this.parseJson = this.parseJson.bind(this);
  }

  parseJson(resp) {
    return resp.json();
  }

  get(url = '', query = {}) {
    const queryString = `?${qs.stringify(query)}`;
    return fetch(`${this.baseUrl}${url}${queryString}`, this.options).then(this.parseJson);
  }
}

module.exports = new Api({
  baseUrl: YELP_API_ROOT,
  authToken: YELP_API_KEY
});
