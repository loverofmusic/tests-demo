// describe + it 来自于 单元测试工具，完善了 测试用例
// 断言库 expect api
describe('第一个单元测试', function () {
  it('测试+1函数', function () {
    expect(add(1)).toBe(1);
    expect(add(2)).toBe(3);
  });
});
