import config from '@repo/jest-config';

const utilsConfig = {
  ...config,
  setupFilesAfterEnv: ['@repo/jest-config/setup'],
};

export default utilsConfig;
