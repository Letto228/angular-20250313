import {ComponentFixture, TestBed} from '@angular/core/testing';

import {By} from '@angular/platform-browser';
import {HeaderComponent} from './header.component';
import {applicationConfigMock} from '../../shared/application-config/application-config.mock';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderComponent],
        }).compileComponents();
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;

        fixture.componentRef.setInput('applicationConfig', applicationConfigMock);

        fixture.detectChanges();
    });

    it('Клик по кнопке sync', () => {
        const trigerEvent = new Event('click');
        const {debugElement} = fixture;
        const menuButtonDebugElement = debugElement.query(By.css('[test-id="header-menu-button"]'));
        const menuClickEmitSpy = spyOn(component.menuClick, 'emit');

        expect(menuClickEmitSpy).not.toHaveBeenCalled();

        menuButtonDebugElement.triggerEventHandler('click', trigerEvent);

        expect(menuClickEmitSpy).toHaveBeenCalled();
        // expect(menuClickEmitSpy).toHaveBeenCalledWith();
    });

    it('Клик по кнопке async', done => {
        const trigerEvent = new Event('click');
        const {debugElement} = fixture;
        const menuButtonDebugElement = debugElement.query(By.css('[test-id="header-menu-button"]'));

        const subscription = component.menuClick.subscribe(event => {
            expect(event).toEqual(undefined);

            subscription.unsubscribe();
            done();
        });

        menuButtonDebugElement.triggerEventHandler('click', trigerEvent);
    });
});
