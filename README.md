# 单元测试 / UI 测试 / 功能测试 /service 测试

---

## 单元测试

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

### npm run unit:start (单元测试启动 生成覆盖率报告 可以在浏览器打开查看了)

---

## UI 测试

### npm i backstopjs -g

### npm run ui:init

(初始化 backstopjs 生成 backstop_data 文件夹 和 backstop.json 文件)

### 配置 backstop.json

( backstop_data 中新建文件夹 bitmaps_reference，存 ui 图, 用来和线上对比)

### npm run ui:start (启动 backstop 生成测试报告)

---

## 功能测试 e2e

### npm install selenium-webdriver --save-dev

需要驱动。。。（其他 e2e 工具 ： nightwatch rize cypress f2etest）

### npm run e2e:start (启动功能测试)

---

## service 测试

### npm i supertest mocha mochawesome --save-dev

### npm run service:start (启动 service 测试，生成报告)
