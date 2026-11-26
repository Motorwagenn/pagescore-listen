import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'rounds',
    loadComponent: () => import('./rounds/rounds.page').then((m) => m.RoundsPage),
  },
  {
    path: 'results',
    loadComponent: () => import('./results/results.page').then((m) => m.ResultsPage),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then((m) => m.AboutPage),
  },
];
