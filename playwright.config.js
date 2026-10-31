import {defineConfig} from '@playwright/test';
const launchOptions = name => process.env[`PLAYWRIGHT_${name.toUpperCase()}_EXECUTABLE_PATH`]
    ? {executablePath: process.env[`PLAYWRIGHT_${name.toUpperCase()}_EXECUTABLE_PATH`]} : {};
export default defineConfig({
    testDir: './tests',
    testMatch: '**/*.spec.js',
    use: {baseURL: 'http://127.0.0.1:4173'},
    projects: ['chromium', 'firefox', 'webkit'].map(name => ({
        name, use: {browserName: name, launchOptions: launchOptions(name)}
    })),
    webServer: {command: 'node tests/server.mjs', url: 'http://127.0.0.1:4173', reuseExistingServer: !process.env.CI}
});
