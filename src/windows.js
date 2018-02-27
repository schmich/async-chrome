import { promise } from './common';

class AsyncWindows
{
  static async create(createData) {
    return promise(callback => chrome.windows.create(createData, callback));
  }

  static async update(windowId, updateInfo) {
    return promise(callback => chrome.windows.update(windowId, updateInfo, callback));
  }
}
