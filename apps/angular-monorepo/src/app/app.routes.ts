import { DateAdapter, NativeDateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'agents',
    loadComponent: () =>
      import('@angular-monorepo/cra').then((m) => m.AgentsComponent),
  },
  {
    path: 'cra/:agentCodeName',
    providers: [provideNativeDateAdapter()],
    loadComponent: () =>
      import('@angular-monorepo/cra').then((m) => m.CraComponent),
  },
  {
    path: '**', loadComponent: () =>
      import('@angular-monorepo/cra').then((m) => m.AgentsComponent),
  },

];
