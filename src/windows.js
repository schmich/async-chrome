import async from './async';

export default class AsyncWindows
{
  static async create() {
    return async(chrome.windows.create, arguments);
  }

  static async update() {
    return async(chrome.windows.update, arguments);
  }
}
