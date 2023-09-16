import vue from "rollup-plugin-vue";

// css
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

// 处理外部依赖
import { nodeResolve } from "@rollup/plugin-node-resolve";
import externals from "rollup-plugin-node-externals";

import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

// 打包时自动清除调试代码
import strip from "@rollup/plugin-strip";
// 压缩代码
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.js",
  output: [
    {
      file: "./dist/dist.umd.js",
      format: "umd",
      // 当 format 为 iife 和 umd 时必须提供，将作为全局变量挂在window(浏览器环境)下
      name: "hut",
    },
    {
      file: "./dist/dist.es.js",
      format: "es",
    },
  ],
  plugins: [
    vue({
      style: {
        postcssPlugins: [autoprefixer(), cssnano()],
      },
    }),
    babel({
      exclude: "node_modules/**",
    }),
    nodeResolve(),
    postcss({
      plugins: [autoprefixer(), cssnano()],
    }),
    commonjs(),
    // devDependencies 类型的依赖就不用加到 externals
    externals({ devDeps: false }),
    strip(),
    terser(),
  ],
};
