export default class AsyncFiles
{
  static async readFile(file, type = null) {
    return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();
      if (type) {
        req.responseType = type;
      }

      req.onload = () => resolve(req.response);
      req.onerror = error => reject(error);

      const url = chrome.runtime.getURL(file);
      req.open('GET', url, true);
      req.send(null);
    });
  }

  static async readBinary(file) {
    return this.readFile(file, 'arraybuffer');
  }
}
