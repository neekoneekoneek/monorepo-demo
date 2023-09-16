import { nodeResolve } from "@rollup/plugin-node-resolve";
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
    babel({
      exclude: "node_modules/**",
    }),
    nodeResolve(),
    commonjs(),
  ],
};
