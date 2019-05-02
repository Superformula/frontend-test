import { BASE_RESTAURANT_API } from '../utilities/ApiUrls';

import request from '../services/Service';

class RestaurantService {
  constructor() {
    this.endpoint = BASE_RESTAURANT_API;
  }

  getRestaurants() {
    return request({
      method: 'get',
      url: `${this.endpoint}`
    }).then(res => res);
  }
}

export default RestaurantService;
