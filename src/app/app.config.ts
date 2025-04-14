import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {routes} from './app.routes';
// import {ProductsStoreService} from './shared/products/products-store.service';
// import {ProductsApiService} from './shared/products/products-api.service';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimationsAsync(),
        // {
        //     provide: ProductsStoreService,
        //     useClass: ProductsStoreService,
        // },
        // ProductsStoreService,
        // ProductsApiService,
    ],
};
