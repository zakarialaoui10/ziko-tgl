
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
const banner= `
/*
  Project: ziko-gl
  Author: Zakaria Elalaoui
  Date : ${new Date()}
  Git-Repo : https://github.com/zakarialaoui10/ziko.js
  Git-Wiki : https://github.com/zakarialaoui10/ziko.js/wiki
  Released under MIT License
*/
`
export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/zikogl.cjs',
    format: 'cjs',
    banner,
    globals: {
      ziko: 'Ziko',
      three : 'Three'
    }
  },{
    file: 'dist/zikogl.mjs',
    format: 'es',
    banner,
    globals: {
      ziko: 'Ziko',
      three : 'Three'
    }
  },
  {
    file: 'dist/zikogl.js',
    format: 'umd',
    banner,
    name:"ZikoGl",
    globals: {
      ziko: 'Ziko',
      three : 'Three'
    }
  }
],
  external: ["ziko", "three"],
  plugins: [resolve(), commonjs()
    //,terser()
    ],
};
