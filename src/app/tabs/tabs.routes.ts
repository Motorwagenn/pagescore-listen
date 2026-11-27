import type { Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

        {
        path: 'rounds',
        loadComponent: () => import('../rounds/rounds.page').then((m) => m.RoundsPage),
      },
      {
        path: 'rounds/:id',
        loadComponent: () => import('../round-detail/round-detail.page').then((m) => m.RoundDetailPage),
      },
      {
        path: 'results',
        loadComponent: () => import('../results/results.page').then((m) => m.ResultsPage),
      },
      {
        path: 'about',
        loadComponent: () => import('../about/about.page').then((m) => m.AboutPage),
      },
      {
        path: '',
        redirectTo: '/tabs/rounds',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/rounds',
    pathMatch: 'full',
  },
];
