const { default: axios } = require('axios');
const withImages = require('next-images');

axios.defaults.headers.Authorization = `bearer ${process.env.YELP_API_KEY}`;
axios.defaults.baseURL = process.env.YELP_API_BASE_URL;
axios.defaults.params = { locale: 'en_US' };

module.exports = withImages();
