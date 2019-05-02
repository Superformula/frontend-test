import { action, computed, observable } from 'mobx';

export default class Store {
  @observable errors = [];
  @observable data = null;
  @observable status = 'init';

  @computed get isComplete() {
    return this.status === 'complete';
  }

  @computed get isError() {
    return this.status === 'error';
  }

  @computed get isInit() {
    return this.status === 'init';
  }

  @computed get isPending() {
    return this.status === 'pending';
  }

  @action setStatusComplete() {
    this.status = 'complete';
  }

  @action setStatusError() {
    this.status = 'error';
  }

  @action setStatusInit() {
    this.status = 'init';
  }

  @action setStatusPending() {
    this.status = 'pending';
  }
}
