module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            '@styles': ([, name]) => {
              return './src/styles/';
            },
            '@components': ([, name]) => {
              return './src/components/';
            },
          },
        },
      ],
    ],
  };
};
