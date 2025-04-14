module.exports = {
    testEnvironment: 'jsdom', // Required for React components
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1', // Map @/ to project root
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transform .js and .jsx files with Babel
    },
    testMatch: ['**/?(*.)+(test|spec).jsx'], // Only run .jsx test files
  };