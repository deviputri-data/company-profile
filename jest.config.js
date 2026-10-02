const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Berikan path ke aplikasi Next.js kamu untuk memuat next.config.js dan file .env di lingkungan pengujian
  dir: "./",
})

const customJestConfig = {
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  }
}

module.exports = createJestConfig(customJestConfig);