class AsyncChromeError extends Error
{
  constructor(...params) {
    super(...params);
  }
}

class PermissionError extends Error
{
  constructor(message) {
    super(message);
  }
}

function promise(fn) {
  return new Promise((resolve, reject) => {
    const callback = (...results) => {
      const err = chrome.runtime.lastError;
      if (err) {
        reject(new AsyncChromeError(err.message));
      } else {
        resolve(...results);
      }
    };

    fn(callback);
  });
}

export {
  PermissionError,
  promise
};
