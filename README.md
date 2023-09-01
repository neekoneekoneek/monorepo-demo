# monorepo-demo（本项目）

## 安装依赖

- 给workspace下项目安装依赖：pnpm add -F 项目名称（package.json的name）依赖（依赖是workspace下的子项目也是这样安装）

## 出现的问题

- Parsing error: No Babel config file detected for

  ```text
  Parsing error: No Babel config file detected for E:\web\src\App.vue. Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.eslint
  ```

  1. 原因：babel配置文件默认需要放在在打开的文件的根目录下，而实际上在web/demos下，不在根目录，所以报错
  2. 解决：给本项目添加生产环境依赖，并配置.eslintignore和.eslintrc.js文件

  ```javascript
  {
    "babel-eslint": "^10.1.0",
    "babel-plugin-component": "^1.1.1",
    "eslint": "6",
    "eslint-plugin-prettier": "3",
    "eslint-plugin-vue": "6"
  }
  ```

- No projects matched the filters

  ```text
  No projects matched the filters in "E:\demo\monorepo-demo"
  ```

  1. 原因：操作项目的workspace未在pnpm-workspace.yaml中声明
  2. 解决：检查workspace是否存在

- 暂未解决（注意其他使用vue@3.3.4的项目）

```text
Vue packages version mismatch: 

- vue@3.3.4 (E:\demo\monorepo-demo\node_modules\.pnpm\vue@3.3.4\node_modules\vue\index.js)
- vue-template-compiler@2.6.11 (E:\demo\monorepo-demo\node_modules\.pnpm\vue-template-compiler@2.6.11\node_modules\vue-template-compiler\package.json)
```

## vite+vue2

- pnpm create vite，选第一个，语言随意

- 安装依赖

   ```javascript
   {
    "vite-plugin-vue2": "^2.0.3",
    "vue": "2.6.11",
    "vue-template-compiler": "2.6.11"
   }
   ```

- 子项目目录下创建vite.config.js

  ```javascript
  import { createVuePlugin } from "vite-plugin-vue2";

  export default {
      plugins: [createVuePlugin()],
  };

  ```

- 创建src目录，将main.js移到该目录下，并修改index.html里script引用路径

- src下创建App.vue，修改main.js的代码

  ```javascript
  import Vue from "vue";
  import App from "./App.vue";

  new Vue({
    render: (h) => h(App),
  }).$mount("#app");

  ```

- 删除无效文件

- 注意本项目vue的版本！！！！
