import { defineConfig } from 'vitest/config';

import { resolveOptions, vitestUserConfig } from '../../base-vitest';

export default defineConfig({
	resolve: resolveOptions,
	test: {
		...vitestUserConfig,
		include: ['./src/**/*.test.ts'],
		exclude: ['./src/**/*.integration.test.ts'],
	},
});
