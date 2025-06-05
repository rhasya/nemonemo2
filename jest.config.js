module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // Important for testing server actions
  moduleNameMapper: {
    // Handle CSS imports (if you have them)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
    // Alias for next/headers and next/navigation for server components
    '^next/headers$': '<rootDir>/__mocks__/nextHeadersMock.js',
    '^next/navigation$': '<rootDir>/__mocks__/nextNavigationMock.js',
  },
  // Setup files after env
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // if you have a setup file
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
};
