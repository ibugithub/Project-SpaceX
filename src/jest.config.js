// jest.config.js
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@testing-library/react$': '<rootDir>/node_modules/@testing-library/react',
    '^react-redux$': '<rootDir>/node_modules/react-redux',
    '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
    '^redux-mock-store$': '<rootDir>/node_modules/redux-mock-store',
  },
  moduleFileExtensions: ['js', 'jsx'],
};
