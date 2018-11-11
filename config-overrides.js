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

      // Breadcrum variables
      "@breadcrumb-base-color": "#D1C4E9",
      "@breadcrumb-last-item-color": "#6200EA",
      "@breadcrumb-separator-color": "#F57F17",
 
      // Tab Variables
      "@tabs-bar-margin": "0 0 5px 0",

      // Form variables
      "@form-item-margin-bottom": "5px",

      // Input variables
      "@input-height-base": "32px",

      // Select variables

    },
    javascriptEnabled: true,
    })(config, env);

  return config;
};