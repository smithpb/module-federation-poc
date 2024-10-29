import { Route } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NestedComponent } from '../components/nested/nested.component';

export const remoteRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'nested', component: NestedComponent },
];
