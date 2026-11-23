import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'flights',
    loadComponent: () => loadRemoteModule('mfe1', './Component').then((m) => m.App),
  },
  { path: '**', redirectTo: '' },
];
