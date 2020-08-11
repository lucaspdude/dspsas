module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
    [
      'compilerOptions',
      {
        baseUrl: "src'",
        paths: {
          '~/*': '*',
        },
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/': './src',
        },
      },
    ],
  ],
};
