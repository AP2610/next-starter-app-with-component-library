import nextJest from 'next/jest.js';
import config from '@repo/jest-config';

const createJestConfig = nextJest({
  dir: './', // path to your Next.js app
});

const nextAppConfig = {
  ...config,
  testMatch: ['<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}', '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['@repo/jest-config/setup'],
};

export default createJestConfig(nextAppConfig);
