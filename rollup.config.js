import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
const banner = `
/*
  Project: ziko-gl
  Author: Zakaria Elalaoui
  Date : ${new Date()}
  Git-Repo : https://github.com/zakarialaoui10/ziko.js
  Git-Wiki : https://github.com/zakarialaoui10/ziko.js/wiki
  Released under MIT License
*/
`;
export default {
  input: "src/core/index.js",
  output: [
    // {
    //   file: "dist/ziko-gl.cjs",
    //   format: "cjs",
    //   banner,
    //   globals: {
    //     ziko: "Ziko",
    //     three : "Three"
    //   },
    //   external: [ "ziko", "three" ],
    // },
    // {
    //   file: "dist/ziko-gl.mjs",
    //   format: "es",
    //   banner,
    //   globals: {
    //     ziko: "Ziko",
    //     three : "Three"
    //   },
    //   external: [ "ziko", "three" ],
    // },
    {
      file: "dist/ziko-gl-umd.js",
      format: "umd",
      banner,
      name: "ZikoGl",
      globals: {
        ziko: "Ziko",
      },
      external: [ "ziko" ],
    },
  ],
  // external: [ "ziko" ],
  plugins: [
    resolve(),
    commonjs(),
    //,terser()
  ],
};
