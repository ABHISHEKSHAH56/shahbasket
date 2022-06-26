module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv"]
    ]
  };
};

// module.exports = {
//   "presets": ["@babel/preset-env", "@babel/preset-react"], 
//   plugins: [
//     ["module:react-native-dotenv"]
//   ],
// };
