import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, effect, input, signal} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {map, startWith} from 'rxjs';
import {CounterInputComponent} from '../../../../shared/counter-input/counter-input.component';
import {isStringValidator} from './is-string.validator';

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
    private readonly brandsFormLength = signal(0);

    readonly brands = input<string[] | null>(null);

    readonly needBrandsView = computed(() => {
        const brands = this.brands();

        return brands && brands.length === this.brandsFormLength();
    });

    readonly minControl = new FormControl(0);
    readonly searchControl = new FormControl('Egor');

    readonly form = new FormGroup({
        search: new FormControl('', {
            validators: [isStringValidator, Validators.minLength(3)],
        }),
        brands: new FormArray<FormControl<boolean>>([]),
        priceRange: new FormGroup(
            {
                min: new FormControl(0),
                max: new FormControl(999999),
            },
            {
                validators: [],
            },
        ),
    });

    readonly error$ = this.form.get('search')?.statusChanges.pipe(
        // map(() => this.form.get('search')?.errors),
        map(status => (status === 'INVALID' ? this.form.get('search')?.errors : null)),
        startWith(this.form.get('search')?.errors),
    );

    constructor() {
        setTimeout(() => {
            this.form.get('search')?.setValue('123');
        }, 5000);
        this.listenBrandsChange();
    }

    getError() {
        return this.form.get('search')?.errors;
    }

    private listenBrandsChange() {
        effect(
            () => {
                const brandsControls = this.brands()?.map(() => new FormControl(false)) || [];
                const brandsForm = new FormArray(brandsControls as Array<FormControl<boolean>>);

                this.form.setControl('brands', brandsForm);

                this.brandsFormLength.set(brandsForm.length);
            },
            {allowSignalWrites: true},
        );
    }
}
