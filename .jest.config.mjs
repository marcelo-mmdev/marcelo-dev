import nextJest from "next/jest.js";

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: "./" });

// Any custom config you want to pass to Jest
const config = {
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
export default createJestConfig(config);
