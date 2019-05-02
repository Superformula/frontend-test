import { action } from 'mobx';

import Store from './Store.js';

import RestaurantService from '../services/RestaurantService';

export class RestaurantStore extends Store {
  @action fetch() {
    if (!this.isInit) {
      return;
    }

    this.setStatusPending();

    new RestaurantService().getRestaurants()
      .then((data) => {
        this.data = data;
        this.setStatusComplete();
      })
      .catch((error) => {
        /* eslint-disable no-console */
        console.log(error);
        /* eslint-enable no-console */

        this.setStatusError();
        this.errors = [error];
      });
  }
}

export default new RestaurantStore();
