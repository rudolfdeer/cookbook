const config = {
  verbose: true,
  setupFilesAfterEnv: ['./src/setupTests.js'],
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'tsx'],
};

module.exports = config;
