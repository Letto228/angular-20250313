import {TestBed} from '@angular/core/testing';
import {provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {ProductsStoreService} from './products-store.service';
import {productsMock} from './products.mock';

// const httpClientMock: HttpClient = {
//     get(_utl: string, _options: unknown): Observable<unknown> {
//         return EMPTY;
//     },
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// } as any as HttpClient;

describe('ProductsStoreService', () => {
    let service: ProductsStoreService;
    let httpTestingContoller: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // imports: [HttpClientTestingModule],
            providers: [
                provideMockStore(),
                provideHttpClient(),
                provideHttpClientTesting(),
                // {
                //     provide: HttpClient,
                //     useValue: httpClientMock,
                // },
            ],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(ProductsStoreService);

        httpTestingContoller = TestBed.inject(HttpTestingController);
    });

    // it('DI my mock test', fakeAsync(() => {
    //     spyOn(httpClientMock, 'get').and.returnValue(
    //         timer(1000).pipe(map(() => ({data: {items: productsMock}}))),
    //     );

    //     service.loadProducts();

    //     tick(1000);

    //     expect(service.getProducts()).toEqual(productsMock);
    // }));

    it('HttpClientMock test', () => {
        service.loadProducts();

        httpTestingContoller.expectOne('products/suggestion').flush({data: {items: productsMock}});

        expect(service.getProducts()).toEqual(productsMock);
    });
});
