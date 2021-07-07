/* config-overrides.js */
const rewireProvidePlugin = require('react-app-rewire-provide-plugin');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = rewireProvidePlugin(config, env, {
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    });
    return config;
  }