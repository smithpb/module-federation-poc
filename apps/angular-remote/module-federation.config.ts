import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'angularRemote',
  exposes: {
    './Routes': 'apps/angular-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
