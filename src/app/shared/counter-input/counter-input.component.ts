import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-counter-input',
    templateUrl: './counter-input.component.html',
    styleUrls: ['./counter-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            // eslint-disable-next-line no-use-before-define
            useExisting: CounterInputComponent,
            multi: true,
        },
    ],
})
export class CounterInputComponent implements ControlValueAccessor {
    readonly step = input(1);

    readonly isDisabled = signal(false);
    readonly counter = signal(0);

    writeValue(newCounter: number): void {
        this.counter.set(newCounter);
    }

    registerOnChange(onChange: (newValue: number) => void): void {
        this.onChange = onChange;
    }

    registerOnTouched(onTouch: () => void): void {
        this.onTouch = onTouch;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled.set(isDisabled);
    }

    back() {
        this.counter.update(counter => counter - this.step());

        this.onChange(this.counter());
        this.onTouch();
    }

    next() {
        this.counter.update(counter => counter + this.step());

        this.onChange(this.counter());
        this.onTouch();
    }

    private onChange: (newValue: number) => void = () => {
        throw new Error(
            'Функция onChange не была установлена, значение в механизм Angular form не было передано',
        );
    };

    private onTouch: () => void = () => {
        throw new Error(
            'Функция onTouch не была установлена, механизм Angular form не получил состояние тронутости',
        );
    };
}
