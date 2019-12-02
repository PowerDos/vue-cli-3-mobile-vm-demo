# 基于Vue-Cli3的Vue移动端企业级工程架构
> 本项目是基于Vue-Cli3脚手架，应用VW的自适应解决方案构建的企业级工程项目，下面会一步步构建起项目结构。

> Author: Gavin

## 基础项目创建

#### 创建项目

```shell
$: vue create vue_cli_3_mobile_vm_demo
```

#### 选择默认模式

```shell
$: Please pick a preset: **default (babel, eslint)
```

#### 补全 Eslint 依赖

```shell
$: npm install eslint-config-standard eslint-friendly-formatter eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard --save-dev
```

#### 配置Eslint规则

> 配置统一规则，团队开发统一规范，在根目录创建文件.eslintrc.js。(PS:配置完规则后，需要根据自身开发工具安装Eslint插件，如VSCode，安装ESLint插件)

> 可以根据自身团队的习惯，指定规则，下面只是一种参考

```json
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "always"],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
```

#### 支持SASS/SCSS

```shell
$: npm install sass-loader node-sass --save-dev
```

#### 创建全局SCSS

> 创建全局scss文件./src/scss/global.scss

```
// 文件中可以写全局的变量，包括字体大小，主题色，边距大小等，这样可以方便后面整个项目风格修改

// 主题 - 蓝
$primary-color: #03A9F4;
$primary-color-dark: #409EFF;
$primary-color-light:#B3E5FC;
$primary-color-rgba-1: rgba(3,169,244,.1);
$primary-color-rgba-2: rgba(3,169,244,.2);
$background-color: #F0F2F5;

// 文字样式
$title-text-color: #303133;
$normal-text-color: #606266;
$sub-text-color: #909399;
$temp-text-color: #C0C4CC;
```

> 根目录创建vue.config.js，引入全局文件

```
module.exports = {
...
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        prependData: '@import "@/assets/scss/global.scss";'
      }
    }
  }
...
};
```

#### 移动端自适应

> 具体可以了解下https://www.w3cplus.com/css/vw-for-layout.html，这里有讲到一些原理，这里不做展开

> 安装依赖

```shell
$: npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units postcss-import postcss-cssnext cssnano cssnano-preset-advanced postcss-import postcss-url --save-dev
```

> 配置规则，修改package.json

```
{
...
	"postcss": {
    "plugins": {
      "autoprefixer": {},
      "postcss-px-to-viewport": {
        "viewportWidth": 750,
        "viewportHeight": 1334,
        "unitPrecision": 3,
        "viewportUnit": "vw",
        "selectorBlackList": [".ignore", ".hairlines"], // 这里是过滤不转换的css，支持正则，如果框架本身把单位写死支持移动端，可以通过这个过滤掉，比如vux UI框架需要过滤掉['.ignore', '.hairlines', /^\.weui/, /^\.dp/, /^\.scroller/, /^\.ignore/],
        "minPixelValue": 1,
        "mediaQuery": false
      }
    }
  },
...
}
```

## 工程目录搭建

#### 加入路由Vue-Router, 状态存储Vuex, HTTP请求axios

```shell
$: npm install vue-router veux axios --save
```

#### 在src文件夹创建工程目录

```
.
├── App.vue              // VUE总入口
├── api                  // API请求文件夹
│   └── homeApi.js       // 分模块写请求文件
├── assets               // 静态文件
│   ├── img              // 图片资源
│   │   └── head.png
│   └── scss             // scss样式资源
│       └── global.scss
├── components           // 抽象出来的组建
│   └── SubTitle.vue
├── main.js              // Vue主文件
├── page                 // 应用页面
│   └── Home.vue
├── router               // 路由
│   └── index.js
├── store                // 状态存储
│   ├── actions.js
│   ├── getters.js
│   ├── index.js
│   ├── modules
│   │   └── home.js
│   └── mutations.js
└── utils                // 工具
    ├── http.js
    └── tool.js
```

#### mian 文件引入vue-router和vuex

```
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
```

#### App.vue引入路由

```
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
};
</script>

<style>
/* 去除默认自带的所有边距 */
html, body {
  margin: 0px;
  padding: 0px;
}
</style>
```

#### 路由创建创立

> 创建./src/router/index.js

```
import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/page/Home';

Vue.use(Router);

export default new Router({
  routes: [
    // 登陆
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});
```

#### 创建状态存储

> 最外层的为全局状态管理(action.js/getters.js/index.js/mutations.js)，modules下放的为每个模块单独的状态存储具体可以下载项目看具体代码内容

```
.
├── actions.js
├── getters.js
├── index.js
├── modules
│   └── home.js
└── mutations.js
```

> 这里展示index.js

```
import Vue from 'vue';
import Vuex from 'vuex';

// 引入全局存储
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

// 引入模块存储
import home from './modules/home';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalFlag: 0
  },
  actions,
  mutations,
  getters,
  modules: {
    home
  }
});
```

## 引入UI框架

> 这里以引入Vant UI为例



## 开发配置





