const banner = `/** @license ms-rest-azure-env
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */`;

/**
 * @type {import('rollup').RollupFileOptions}
 */
const config = {
  input: './es/lib/azureEnvironment.js',
  external: [],
  output: {
    file: "./dist/msRestAzureEnv.js",
    format: "umd",
    name: "Azure",
    sourcemap: true,
    banner
  },
  plugins: []
}

export default config;
