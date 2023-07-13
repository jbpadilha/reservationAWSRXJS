import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  automock: false,
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['<rootDir>/src/**/*.test.(js|jsx|ts|tsx)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  //transform: {
//    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  //},
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', 'interfaces', 'Main.tsx', 'Menu.tsx'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.test.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],

  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  coverageThreshold: {
    "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -10
    }
},
}
export default config;