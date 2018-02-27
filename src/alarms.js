import async from './async';

// https://developer.chrome.com/extensions/alarms
export default class AsyncAlarms
{
  static create() {
    return chrome.alarms.create(...arguments);
  }
  
  static async get() {
    return async(chrome.alarms.get, arguments);
  }

  static async getAll() {
    return async(chrome.alarms.getAll, arguments);
  }

  static async clear() {
    return async(chrome.alarms.clear, arguments);
  }

  static async clearAll() {
    return async(chrome.alarms.clearAll, arguments);
  }
}
