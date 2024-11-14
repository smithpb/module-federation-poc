import { Route } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NestedComponent } from '../components/nested/nested.component';
import { SecondaryComponent } from '../components/secondary/secondary.component';

export const remoteRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'nested', component: NestedComponent },
  { path: 'nested/again', component: SecondaryComponent },
];
