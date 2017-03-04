const Some = val => ({
  then(onFulfilled, _) {
    onFulfilled(val);
  }
});

const None = {
  then: (_, onRejected) => {
    onRejected(new Error('Empty option'));
  }
};

module.exports = { Some, None };
