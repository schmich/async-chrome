import async from './async';

export default class AsyncStorage
{
  constructor(store) {
    this.store = store;
  }

  async get() {
    return async(this.store.get, arguments);
  }

  async set(obj) {
    return async(this.store.set, arguments);
  }

  async clear() {
    return async(this.store.clear, arguments);
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
