module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleDirectories: ['<rootDir>/node_modules', 'node_modules'],
  testPathIgnorePatterns: [
    '<rootDir>/cypress/',
    '<rootDir>/dist/',
  ],
  testEnvironment: 'jsdom',
};
