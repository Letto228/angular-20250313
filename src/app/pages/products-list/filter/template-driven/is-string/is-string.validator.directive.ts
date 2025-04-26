import {Directive, ElementRef, inject} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
    selector: '[appIsStringValidator]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            // eslint-disable-next-line no-use-before-define
            useExisting: IsStringValidatorDirective,
        },
    ],
})
export class IsStringValidatorDirective implements Validator {
    private readonly element = inject(ElementRef).nativeElement;

    validate(control: AbstractControl): ValidationErrors | null {
        // ....element calculate;

        return Number(control.value) ? {isString: 'Is string validator error'} : null;
    }
}
