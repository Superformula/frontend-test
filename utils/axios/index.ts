import axios from 'axios';

export default axios.create({
  baseURL: process.env.YELP_API_BASE_URL,
  params: { locale: 'en_US' },
  headers: {
    Authorization: `bearer ${process.env.YELP_API_KEY}`,
  },
});
