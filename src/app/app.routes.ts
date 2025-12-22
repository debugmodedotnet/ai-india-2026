import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home },

    { path: 'about', loadComponent: () => import('./components/about/about').then(m => m.About) },
    { path: 'speakers', loadComponent: () => import('./components/speakers/speakers').then(m => m.Speakers) },
    { path: 'agenda', loadComponent: () => import('./components/agenda/agenda').then(m => m.Agenda) },
    { path: 'sponsors', loadComponent: () => import('./components/sponsors/sponsors').then(m => m.Sponsors) },
    { path: 'pricing', loadComponent: () => import('./components/pricing/pricing').then(m => m.Pricing) },
    { path: 'venue', loadComponent: () => import('./components/venue/venue').then(m => m.Venue) },
    { path: 'coc', loadComponent: () => import('./components/coc/coc').then(m => m.Coc) },

    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
