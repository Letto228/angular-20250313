import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {routes} from './app.routes';
import {baseUrlInterceptor} from './shared/base-url/base-url.interceptor';
import {errorInterceptor} from './shared/error-interceptor/error.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimationsAsync(),
        // HttpClient,
        provideHttpClient(withInterceptors([baseUrlInterceptor, errorInterceptor])),
        // {
        //     provide: ProductsStoreService,
        //     useValue: {},
        // },
    ],
};
