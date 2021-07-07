const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@pomocontrol-components': path.resolve(__dirname, 'src/views/components')
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
          '^@pomocontrol-components(.*)$':  '<rootDir>/src/views/components$1'
        // '^@(.*)$': '<rootDir>/src$1'
      }
    }
  }
};