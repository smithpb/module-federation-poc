import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'windowEvent',

  exposes: {
    './Module': './src/bootstrap.tsx',
  },
};

export default config;
