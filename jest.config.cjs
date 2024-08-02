module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.(js|jsx)$': 'babel-jest'
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|sass|scss)$': '<rootDir>/tests/jest.mock.js', // Mock CSS imports
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/tests/jest.mock.js' // Mock image imports
      },
    testMatch: ['**/tests/unit/**/*.spec.(js|ts|jsx)'],
    moduleDirectories: ['node_modules', '<rootdir>/src'],
    modulePaths: ["<rootdir>/src"]
  };



// const {defaults} = require('jest-config');

// /** @type {import('jest').Config} */
// const config = {
//   moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts', 'js', 'jsx', 'json', 'vue'],
//   transform: {}
// };

// module.exports = config;