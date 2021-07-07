const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@pomocontrol-components': path.resolve(__dirname, 'src/views/components'),
      '@pomocontrol-utils': path.resolve(__dirname, 'src/utils')
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
          '^@pomocontrol-components(.*)$':  '<rootDir>/src/views/components$1',
          '^@pomocontrol-utils(.*)$':  '<rootDir>/src/utils$1',
        // '^@(.*)$': '<rootDir>/src$1'
      }
    }
  }
};