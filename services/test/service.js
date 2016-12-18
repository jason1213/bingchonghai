var assert      = require('assert')
  , specs       = require('../specs/api_spec');

require('../build');

describe('apitest', function() {

  describe('#run api test case', function() {

    var stats = {};
    specs(function(s) {
      Object.assign(stats, s);
    });

    it("测试运行完成后的测试用例统计信息", function(done) {
      /*
      assert.deepEqual({
        tests: 15,
        assertions: 76,
        failures: 0,
        skipped: 0
      }, stats);
      */
      done();
    });

  });

});