import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('angularRemote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'marketing',
    children: [
      {
        path: '**',
        loadComponent: () =>
          import('./components/ReactAppMount/mount.component').then(
            (m) => m.ReactAppMountComponent
          ),
      },
    ],
  },
  {
    path: 'contact',
    children: [
      {
        path: '**',
        loadComponent: () =>
          import('./components/WindowEventMount/mount.component').then(
            (m) => m.MountComponent
          ),
      },
    ],
  },
];
