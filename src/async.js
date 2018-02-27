class AsyncChromeError extends Error
{
  constructor(...params) {
    super(...params);
  }
}

export default function async(fn, args) {
  return new Promise((resolve, reject) => {
    const callback = (...results) => {
      const err = chrome.runtime.lastError;
      if (err) {
        reject(new AsyncChromeError(err.message));
      } else {
        resolve(...results);
      }
    };

    fn.call(null, ...args, callback);
  });
}
