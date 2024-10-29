import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'angularRemote',
  exposes: {
    './Routes': 'apps/angular-remote/src/app/remote-entry/entry.routes.ts',
    './EntryComponent':
      'apps/angular-remote/src/app/components/home/home.component.ts',
  },
};

export default config;
