# tests-demo

## 单元测试 UI 测试 功能测试

## 单元测试===

1. 安装单元测试框架
   cnpm install karma --save-dev
   package.json 里
   初始化 karma init
   运行 karma start

2. 断言库
   npm install karma-jasmine jasmine-core --save-dev

3. npm install karma karma-coverage --save-dev

## UI 测试===

npm install -g backstopjs
backstop init
backstop test

## e2e 测试===

UI Recorder

## service 测试===

nodejs api 结果不符合

---

### npm i karma --save-dev（单元测试框架）

### npm run unit:init（初始化 karma）

=>jasmine
=>PhantomJS

### npm i karma-jasmine jasmine-core --save-dev（断言库）

### npm install --save-dev karma-phantomjs-launcher （无头浏览器）

### npm run unit:start (单元测试启动)

### npm install karma-coverage --save-dev (代码覆盖率检查工具)

### karma.conf.js:

```js
preprocessors: {
  './src/**/*.js': ['coverage']
},

reporters: ['progress', 'coverage'],

coverageReporter: {
  type: 'html',
  dir: './docs/coverage/',
},
```

### npm run unit:start (单元测试启动,生成覆盖率报告，可以在浏览器打开查看了)
