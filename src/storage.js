import { promise } from './common';

class AsyncStorage
{
  constructor(store) {
    this.store = store;
  }

  get(keys = null) {
    return promise(callback => this.store.get(keys, callback));
  }

  set(obj) {
    return promise(callback => this.store.set(obj, callback));
  }

  clear() {
    return promise(callback => this.store.clear(callback));
  }

  static get sync() {
    if (!this._sync) {
      this._sync = new AsyncStorage(chrome.storage.sync);
    }
    return this._sync;
  }

  static get local() {
    if (!this._local) {
      this._local = new AsyncStorage(chrome.storage.local);
    }
    return this._local;
  }
}
