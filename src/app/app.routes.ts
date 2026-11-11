import { Routes } from '@angular/router';
import { Registro } from './registro/registro';

export const routes: Routes = [
    { path: 'registro', component: Registro },
    { path: '', redirectTo: 'registro', pathMatch: 'full' }
];
