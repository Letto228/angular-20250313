import {Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {TypeComponent} from './type/type.component';

export const routes: Routes = [
    {
        path: ':id',
        component: ProductComponent,
        providers: [],
        // canActivate: [canActivateTestGuard],
        // canActivateChild: [canActivateChildTestGuard],
        children: [
            {
                path: 'description',
                // component: DescriptionComponent,
                loadComponent: () =>
                    import('./description/description.component').then(m => m.DescriptionComponent),
                // canMatch: [canMatchTestGuard],
                // canActivate: [canActivateTestGuard],
            },
            {
                path: 'description',
                // component: NewDescriptionComponent,
                loadComponent: () =>
                    import('./new-description/new-description.component').then(
                        m => m.NewDescriptionComponent,
                    ),
            },
            {
                path: 'type',
                component: TypeComponent,
                // canActivate: [canActivateTestGuard],
            },
        ],
    },
];
