const co = require('co');
const test = require('tape');

const { Some, None } = require('../index');

test('addition of options', (t) => {
  co(function *() {
    const one = Some(1);
    const two = Some(2);
    const result = (yield one) + (yield two);
    t.equal(3, result);
    t.end();
  }).catch(_ => {
    t.fail('should not have thrown');
  });
});

test('addition of options', (t) => {
  t.plan(2);
  co(function *() {
    const one = Some(1);
    const two = None;
    t.pass('We should be here.');
    const result = (yield one) + (yield two);
    t.fail('we should not get here.');
  }).catch(_ => {
    t.pass('We should break out when we realize we cannot yield.');
    t.end();
  });
});
