import expect from 'chai';
import DelivaryLog from

// TODO importに書き換える
var assert = require('assert')

describe('LogModel', function() {
  describe('#constructor()', function () {

    stub = "{\"time\":\"2016-01-02 03:04:05.006\"}"
    target = new DeliveryLog(stub)

    it('new logModel set json fields', function () {
      println(target)
      console.log(target)
      assert.equal(json, [1,2,3].indexOf(5));
    });
  });
});
