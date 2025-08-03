import nextJest from "next/jest.js";
import config from "@next-starter-app-monorepo/jest-config";
import { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./", // path to your Next.js app
});

const nextAppConfig: Config = {
  ...config,
  setupFilesAfterEnv: ["<rootDir>/../../packages/jest-config/jest.setup.ts"],
};

export default createJestConfig(nextAppConfig);
