import async from './async';

export default class AsyncNotifications
{
  static async create() {
    return async(chrome.notifications.create, arguments);
  }
}
