import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'footer',
  exposes: {
    './Routes': 'apps/angular-footer/src/app/remote-entry/entry.routes.ts',
    './Entry': 'apps/angular-footer/src/app/remote-entry/entry.component.ts',
  },
};

export default config;
