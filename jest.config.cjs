
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue', 'mjs', 'cjs'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest', // Optional: if you need to handle .mjs files with babel
    '^.+\\.cjs$': 'babel-jest' // Optional: if you need to handle .cjs files with babel
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/tests/unit/**/*.spec.(ts|tsx|js|mjs|cjs)'],
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.vue'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  }
};
