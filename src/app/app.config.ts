import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {routes} from './app.routes';
import {baseUrlInterceptor} from './shared/base-url/base-url.interceptor';
import {errorInterceptor} from './shared/error-interceptor/error.interceptor';
import {reducer} from './store/store';
import {effects} from './store/effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptors([baseUrlInterceptor, errorInterceptor])),
        provideStore(reducer),
        provideEffects(effects),
    ],
};
