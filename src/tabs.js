import { promise } from './common';

// https://developer.chrome.com/extensions/tabs
class AsyncTabs
{
  static async get(tabId) {
    return promise(callback => chrome.tabs.get(tabId, callback));
  }

  static async create(createProperties) {
    return promise(callback => chrome.tabs.create(createProperties, callback));
  }

  static async getCurrent() {
    return promise(callback => chrome.tabs.getCurrent(callback));
  }

  static async update(tabId, updateProperties) {
    return promise(callback => chrome.tabs.update(tabId, updateProperties, callback));
  }

  static async query(queryInfo) {
    return promise(callback => chrome.tabs.query(queryInfo, callback));
  }
}
