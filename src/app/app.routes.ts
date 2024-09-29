import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pagina/login.page').then((m) => m.loginPage),
  },
  {
    path: '',
    redirectTo: 'login.page',
    pathMatch: 'full',
  },
  {
    path: 'pagina',
    loadComponent: () => import('./pagina/login.page').then( m => m.PaginaPage)
  },
];
