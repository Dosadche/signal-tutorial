import { Routes } from '@angular/router';
import { BasicComponent } from './pages/basic/basic.component';
import { SecondComponent } from './pages/second/second.component';

export const routes: Routes = [
    {
        path: 'basic',
        component: BasicComponent,
    },
    {
        path: 'second',
        component: SecondComponent,
    },
    {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full'
    }
];
