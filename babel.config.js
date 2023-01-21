module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['babel-plugin-module-resolver',
        {
          alias : {
            '@styles': ([, name]) => {
              return './styles/'
            },
            '@components': ([, name]) => {
              return './components/'
            }
          }
        }
      ],
    ]
  };
};
