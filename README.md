# monorepo-demo（本项目）

## 安装依赖

- 给 workspace 下项目安装依赖：pnpm add -F 项目名称（package.json 的 name）依赖（依赖是 workspace 下的子项目也是这样安装）

## 出现的问题

- Parsing error: No Babel config file detected for

  ```text
  Parsing error: No Babel config file detected for E:\web\src\App.vue. Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.eslint
  ```

  1. 原因：babel 配置文件默认需要放在在打开的文件的根目录下，而实际上在 web/demos 下，不在根目录，所以报错
  2. 解决：给本项目添加生产环境依赖，并配置.eslintignore 和.eslintrc.js 文件

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

  1. 原因：操作项目的 workspace 未在 pnpm-workspace.yaml 中声明，或者命令有问题
  2. 解决：检查 workspace 是否存在或者检查命令是否有问题（例如将 pnpm add -F... 写成了 pnpm -F add...）

- npm publish 问题
  - 401：npm login 登陆一下
  - 402：@xx/xxx 的库默认发布私有库，npm publish --access public
  - 404：@xx/xxx 的库发布时需要确定有 xx 组织

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

- 子项目目录下创建 vite.config.js

  ```javascript
  import { createVuePlugin } from "vite-plugin-vue2";

  export default {
    plugins: [createVuePlugin()],
  };
  ```

- 创建 src 目录，将 main.js 移到该目录下，并修改 index.html 里 script 引用路径

- src 下创建 App.vue，修改 main.js 的代码

  ```javascript
  import Vue from "vue";
  import App from "./App.vue";

  new Vue({
    render: (h) => h(App),
  }).$mount("#app");
  ```

- 删除无效文件

- 注意本项目 vue 的版本！！！！

## nginx

- 相关目录
  ![Alt text](image-2.png)

- 部署：把前端项目放到合适的地方
  ![Alt text](image-3.png)

- 配置：根据上一步的目录结构，配置 nginx.conf 文件
  ![Alt text](image.png)

- 部署的结果：根据 nginx.conf 访问对应的地址即可看到
  ![Alt text](image-5.png)
  ![Alt text](image-1.png)

- 命令

  ```text
  nginx // 启动
  nginx -s reload // 重新加载
  nginx -s stop // 关闭
  killall nginx // 关闭所有nginx进程
  ps -ef | grep nginx // 查看启动情况
  ```
