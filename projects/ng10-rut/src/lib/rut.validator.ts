import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { rutValidate } from 'rut-helpers';

/* tslint:disable:directive-selector directive-class-suffix */

// tslint:disable-next-line:ban-types
export function validateRutFactory(rutValidateFn: Function) {
  return (c: FormControl) => {
    return rutValidateFn(c.value) ? null : { invalidRut: true };
  };
}

@Directive({
  selector: '[validateRut][ngModel],[validateRut][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
  ],
})
export class RutValidator {
  // tslint:disable-next-line:ban-types
  private validator: Function;

  constructor() {
    this.validator = validateRutFactory(rutValidate);
  }

  public validate(c: FormControl) {
    return this.validator(c);
  }
}
