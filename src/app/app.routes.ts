import {Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        // component: ProductsListComponent,
        pathMatch: 'full',
        redirectTo: '/products-list',
    },
    {
        path: 'products-list',
        // component: ProductsListComponent,
        loadComponent: () =>
            import('./pages/products-list/products-list.component').then(
                m => m.ProductsListComponent,
            ),
    },
    {
        path: 'product',
        loadChildren: () => import('./pages/product/product.routes').then(m => m.routes),
    },
    // {
    //     path: 'product/id',
    //     component: ProductComponent,
    //     children: [
    //         {
    //             path: 'description',
    //             component: DescriptionComponent,
    //         },
    //         {
    //             path: 'type',
    //             component: TypeComponent,
    //         },
    //     ],
    // },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

// product/id/type
// const urlSegments = 'product/id/type'.split('/'); // ['product', 'id', 'type']

// product/id

// function parseUrl(urlSegments: string): Routes | undefined {
//     let unparsedSegments = urlSegments;

//     while (unparsedSegments) {
//         const searchedSegment
//     }
// }

// function getConfigs(urlSegment: string[], routes: Routes) {
//     let applyedRoutes = routes;
//     let unresolvedSegment = urlSegments;

//     while (unresolvedSegment.length) {

//     }
// }

// function getConfig(urlSegment: string[], routes: Routes): Route | undefined {
//     return routes.find(route => {
//         const isForAllSegments = route.path === '**';
//         const isSearchSegment =
//             route.pathMatch === 'full'
//                 ? route.path === urlSegment.join('/')
//                 : checkPathByPrefix(urlSegment, route.path?.split('/'), route.children);

//         return isForAllSegments || isSearchSegment;
//     });
// }

// function checkPathByPrefix(
//     urlSegments: string[],
//     pathSegments: string[] | undefined,
//     childrenRoutes: Routes | undefined,
// ): boolean {
//     const isPrefix = pathSegments
//         ? pathSegments.every((segment, index) => urlSegments[index] === segment)
//         : false;

//     if (!isPrefix) {
//         return false;
//     }

//     if (urlSegments.length === pathSegments?.length) {
//         return true;
//     }

//     if (!childrenRoutes) {
//         return false;
//     }

//     const unresolvedSegment = urlSegments.slice(pathSegments?.length);
//     const applyConfig = getConfig(unresolvedSegment, childrenRoutes);

//     return applyConfig;
// }
