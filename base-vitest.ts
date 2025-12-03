import { ResolveOptions } from 'vite';
import { ViteUserConfig } from 'vitest/config';

export const resolveOptions: ResolveOptions = {
	/*
		Vitest supports by default, in addition to the below-listed extensions,
		'.mjs', '.mts', '.jsx' and '.tsx' which are types for React and/or ESM
		projects. If the default values are left, many libraries that include
		these ESM file types are also loaded when running tests and cause quite
		cryptic errors.
	*/
	extensions: ['.js', '.ts', '.json'],
};

export const vitestUserConfig: ViteUserConfig['test'] = {
	environment: 'node',
	/*
		By default, vitest does not provide global APIs for explicitness.
		By enabling globals here and by providing the following configuration
		in the TypeScript configuration file:
		
		{
			...
			"compilerOptions": {
				...
				"types": ["vitest/globals"],
				...
			},
			...
		}

		Then it's not needed to explicitly import the test API functions (describe,
		it, beforeAll, afterAll, etc).
	*/
	globals: true,
	watch: false,
};
