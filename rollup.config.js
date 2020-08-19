import typescript from 'rollup-plugin-typescript2';
export default {
  input: 'src/Midi.ts',
  output: {
    file: 'dist/Midi.js',
    format: 'esm',
  },
  // external: ['midi-file-esbuild'],
  plugins: [typescript()]
};