import vue from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "index.js",
  output: [
    {
      file: "./dist/dist.umd.js",
      format: "umd",
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
  ],
  external: ["vue", "dayjs"],
};
