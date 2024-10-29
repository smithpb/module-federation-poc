import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('angularRemote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'marketing',
    loadComponent: () =>
      import('./components/ReactAppMount/mount.component').then(
        (m) => m.ReactAppMountComponent
      ),
  },
  // {
  //   path: '',
  //   component: NxWelcomeComponent,
  // },
];
