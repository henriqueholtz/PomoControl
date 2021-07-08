const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@pomocontrol-components': path.resolve(__dirname, 'src/views/components'),
      '@pomocontrol-utils': path.resolve(__dirname, 'src/utils'),
      '@pomocontrol-enums': path.resolve(__dirname, 'src/enums'),
      '@pomocontrol-models': path.resolve(__dirname, 'src/models')
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
          '^@pomocontrol-components(.*)$':  '<rootDir>/src/views/components$1',
          '^@pomocontrol-utils(.*)$':  '<rootDir>/src/utils$1',
          '^@pomocontrol-enums(.*)$':  '<rootDir>/src/enums$1',
          '^@pomocontrol-models(.*)$':  '<rootDir>/src/models$1'
        // '^@(.*)$': '<rootDir>/src$1'
      }
    }
  }
};