import async from './async';

// https://developer.chrome.com/extensions/tabs
export default class AsyncTabs
{
  static async get() {
    return async(chrome.tabs.get, arguments);
  }

  static async create() {
    return async(chrome.tabs.create, arguments);
  }

  static async getCurrent() {
    return async(chrome.tabs.getCurrent, arguments);
  }

  static async update() {
    return async(chrome.tabs.update, arguments);
  }

  static async query() {
    return async(chrome.tabs.query, arguments);
  }
}
