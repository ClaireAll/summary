/**
 * https://zhuanlan.zhihu.com/p/83965949
 * promise有3个状态：pending fulfilled rejected
 * pending可以切换到fulfilled/rejected
 * fulfilled不能迁移到其它状态，必须有个不可变的value
 * rejected不能迁移到其它状态，必须有个不可变的reason
 * promise必须要then方法，接受onFulfilled和onRejected参数
 * onFulfilled和onRejected必须是函数，必须最多执行一次，onFulfilled参数是value，onRejected参数是reason
 * then可以调用多次，每次注册一组onFulfilled和onRejected的callback
 * then方法必须返回promise
 */

const isFunction = (obj) => typeof obj === "function";
const isObject = (obj) => !!(obj && typeof obj === "object");
const isThenable = (obj) => (isFunction(obj) || isObject(obj)) && "then" in obj;
const isPromise = (promise) => promise instanceof Promise;

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function myPromise(f) {
  this.result = null;
  this.state = PENDING;
  this.callbacks = [];

  let onFulfilled = (value) => transition(this, FULFILLED, value);
  let onRejected = (reason) => transition(this, REJECTED, reason);

  let ignore = false;
  let resolve = (value) => {
    if (ignore) return;
    ignore = true;
    resolvePromise(this, value, onFulfilled, onRejected);
  };
  let reject = (reason) => {
    if (ignore) return;
    ignore = true;
    onRejected(reason);
  };

  try {
    f(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
  return new myPromise((resolve, reject) => {
    let callback = { onFulfilled, onRejected, resolve, reject };

    if (this.state === PENDING) {
      this.callbacks.push(callback);
    } else {
      setTimeout(() => handleCallback(callback, this.state, this.result), 0);
    }
  });
};

const handleCallback = (callback, state, result) => {
  let { onFulfilled, onRejected, resolve, reject } = callback;
  try {
    if (state === FULFILLED) {
      isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result);
    } else if (state === REJECTED) {
      isFunction(onRejected) ? resolve(onRejected(result)) : reject(result);
    }
  } catch (error) {
    reject(error);
  }
};

const handleCallbacks = (callbacks, state, result) => {
  while (callbacks.length) handleCallback(callbacks.shift(), state, result);
};

const transition = (promise, state, result) => {
  if (promise.state !== PENDING) return;
  promise.state = state;
  promise.result = result;
  setTimeout(() => handleCallbacks(promise.callbacks, state, result), 0);
};

const resolvePromise = (promise, result, resolve, reject) => {
  if (result === promise) {
    let reason = new TypeError("Can not fufill promise with itself");
    return reject(reason);
  }

  if (isPromise(result)) {
    return result.then(resolve, reject);
  }

  if (isThenable(result)) {
    try {
      let then = result.then;
      if (isFunction(then)) {
        return new myPromise(then.bind(result)).then(resolve, reject);
      }
    } catch (error) {
      return reject(error);
    }
  }

  resolve(result);
};

module.exports = myPromise;
