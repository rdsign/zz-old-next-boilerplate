module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/pages/**/*.{ts,tsx}',
        '<rootDir>/!pages/**/*.styles.ts',
        '<rootDir>/!pages/**/*.d.ts',
    ],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            statements: 0,
            lines: 0,
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^.+\\.(css|sass|scss)$': '<rootDir>/spec/__mocks__/styleMock.js',
        '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/spec/__mocks__/fileMock.js',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    setupFiles: ['jest-canvas-mock'],
    setupFilesAfterEnv: ['<rootDir>spec/jest.setup.js'],
};
