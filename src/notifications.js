import { promise } from './common';

class AsyncNotifications
{
  static async create(notificationId, options) {
    return promise(callback => chrome.notifications.create(notificationId, options, callback));
  }
}
