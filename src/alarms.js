import { PermissionError, promise } from './common';

// https://developer.chrome.com/extensions/alarms
class AsyncAlarms
{
  static create(name, alarmInfo) {
    return chrome.alarms.create(name, alarmInfo);
  }
  
  static async get(name) {
    return promise(callback => chrome.alarms.get(name, callback));
  }

  static getAll() {
    return promise(callback => chrome.alarms.getAll(callback));
  }

  static clear(name) {
    return promise(callback => chrome.alarms.clear(name, callback));
  }

  static clearAll() {
    return promise(callback => chrome.alarms.clearAll(callback));
  }
}
