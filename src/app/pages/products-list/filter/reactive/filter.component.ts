import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, effect, input} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {map} from 'rxjs';
import {CounterInputComponent} from '../../../../shared/counter-input/counter-input.component';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        CounterInputComponent,
        ReactiveFormsModule,
        ReactiveFormsModule,
    ],
})
export class FilterComponent {
    brands = input<string[] | null>(null);

    readonly minControl = new FormControl(0);
    readonly searchControl = new FormControl('Egor');

    readonly form = new FormGroup({
        search: new FormControl(''),
        brands: new FormArray<FormControl<boolean>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(999999),
        }),
    });

    constructor() {
        // this.form.get('search');
        this.form.valueChanges
            .pipe(
                map(formValue => ({
                    ...formValue,
                    brands: formValue.brands
                        ?.map((flag, index) => flag && this.brands()?.[index])
                        .filter(Boolean),
                })),
            )
            // eslint-disable-next-line no-console
            .subscribe(console.log);

        // setTimeout(() => {
        //     this.minControl.setValue(100);
        //     this.minControl.disable();
        // }, 1000);

        // this.minControl.valueChanges.subscribe(newValue => {
        //     console.log('Its new value by FilterComponent', newValue);
        // });

        this.listenBrandsChange();
    }

    private listenBrandsChange() {
        effect(() => {
            const brandsControls = this.brands()?.map(() => new FormControl(false)) || [];
            const brandsForm = new FormArray(brandsControls as Array<FormControl<boolean>>);

            this.form.setControl('brands', brandsForm);
        });
    }
}
