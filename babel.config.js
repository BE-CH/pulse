/**
 * Setup the babel config to work with expo and other plugins.
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // More info at: https://github.com/expo/expo/tree/main/packages/babel-preset-expo
    plugins: [
      [
        'react-native-unistyles/plugin',
        {
          root: 'app',
          autoProcessImports: ['components'],
        },
      ],
    ],
  };
};
