const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {

  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: { 
      // Base Variables
      "@font-size-base": "13px",

      // Tab Variables
      "@tabs-bar-margin": "0 0 5px 0",
    },
    javascriptEnabled: true,
    })(config, env);

  return config;
};