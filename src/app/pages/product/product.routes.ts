import {Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {TypeComponent} from './type/type.component';

export const routes: Routes = [
    {
        path: ':id',
        component: ProductComponent,
        providers: [],
        children: [
            {
                path: 'description',
                loadComponent: () =>
                    import('./description/description.component').then(m => m.DescriptionComponent),
            },
            {
                path: 'description',
                loadComponent: () =>
                    import('./new-description/new-description.component').then(
                        m => m.NewDescriptionComponent,
                    ),
            },
            {
                path: 'type',
                component: TypeComponent,
            },
        ],
    },
];
