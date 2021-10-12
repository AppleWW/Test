class myPromise {
  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  status = 'pending';
  value = null;
  reason = null;
  onFulfilledCallback = [];
  onRejectedCallback = [];

  resolve = (value) => {
    if (this.status === 'pending') {
      this.status = 'fulfilled';
      this.value = value;
      // this.onFulfilledCallback && this.onFulfilledCallback(value);
      while (this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value);
      }
    }
  };
  reject = (reason) => {
    if (this.status === 'pending') {
      this.status = 'rejected';
      this.reason = reason;
      // this.onRejectedCallback && this.onRejectedCallback(value);
      while (this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason);
      }
    }
  };

  then(onFulfilled, onRejected) {
    if (this.status === 'fulfilled') {
      onFulfilled(this.value);
    } else if (this.status === 'rejected') {
      onRejected(this.reason);
    } else if (this.status === 'pending') {
      this.onFulfilledCallback.push(onFulfilled);
      this.onRejectedCallback.push(onRejected);
    }
  }
}
module.exports = myPromise;
