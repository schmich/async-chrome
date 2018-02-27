import AsyncTabs from './alarms';
import AsyncStorage from './storage';
import AsyncWindows from './windows';
import AsyncNotifications from './notifications';
import AsyncFiles from './files';

export default class AsyncChrome
{
  static get alarms() {
    return AsyncAlarms;
  }

  static get tabs() {
    return AsyncTabs;
  }

  static get windows() {
    return AsyncWindows;
  }

  static get notifications() {
    return AsyncNotifications;
  }

  static get storage() {
    return AsyncStorage;
  }

  static get files() {
    return AsyncFiles;
  }
}
