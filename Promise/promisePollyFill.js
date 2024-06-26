function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFulFilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFulFilled = true;
    value = val;

    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      called = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFulFilled && !isCalled) {
      called = true;
      onResolve(value);
    }

    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }

    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const examplePromis = new PromisePolyFill((resolve, reject) => {
  resolve(2);
});

examplePromis
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

PromisePolyFill.resolve = (val) => {
  return new PromisePolyFill(function executor(resolve, reject) {
    resolve(val);
  });
};

PromisePolyFill.reject = (val) => {
  return new PromisePolyFill(function executor(resolve, reject) {
    reject(val);
  });
};

//Pollyfill for Promise.allPolyFill

Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];

    if (!promises.length) {
      resolve(results);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((res) => {
        results[idx] = res;
        pending--;

        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};
