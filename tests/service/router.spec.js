const superagent = require('supertest');
const app = require('./app');
function request() {
  return superagent(app.listen());
}
describe('接口测试脚本', function () {
  it('API测试', function (done) {
    request()
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          done(err);
        }
        if (res.body.data == 'Hello World') {
          done();
        } else {
          done(new Error('返回接口错误'));
        }
      });
  });
});
describe('Node的容错机制', function () {
  it('404脚本错误', function (done) {
    request().get('/message/notfound').expect('404', done);
  });
});
