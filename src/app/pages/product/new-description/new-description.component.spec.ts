import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NewDescriptionComponent} from './new-description.component';

describe('NewDescriptionComponent', () => {
    let component: NewDescriptionComponent;
    let fixture: ComponentFixture<NewDescriptionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NewDescriptionComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NewDescriptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
