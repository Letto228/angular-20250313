import {Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/products-list',
    },
    {
        path: 'products-list',
        // canDeactivate: [canDeactivateTestGuard],
        loadComponent: () =>
            import('./pages/products-list/products-list.component').then(
                m => m.ProductsListComponent,
            ),
    },
    {
        path: 'product',
        // canActivate: [canActivateTestGuard],
        loadChildren: () => import('./pages/product/product.routes').then(m => m.routes),
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
