module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // setupFiles: ['<rootDir>/mocks/router.js'],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '\\.(css|scss)$': 'identity-obj-proxy', 
    "^src/(.*)$": "<rootDir>/src/app/$1",
  },
  testEnvironment: 'jest-environment-jsdom',
  modulePaths: [
    "src",
    "test"
  ],
};
