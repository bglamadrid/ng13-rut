import {Directive, EventEmitter, Output, HostListener} from '@angular/core';
import * as rutHelpers from 'rut-helpers';

/* tslint:disable:directive-selector */

@Directive({
  selector: '[formatRut]'
})
export class RutDirective {
  @Output() rutChange: EventEmitter<any>;

  constructor() {
    this.rutChange = new EventEmitter();
  }

  @HostListener('focus', ['$event.target'])
  onFocus(target: HTMLInputElement) {
    target.value = rutHelpers.rutClean(target.value);
  }

  @HostListener('blur', ['$event.target'])
  onBlur(target: HTMLInputElement) {
    target.value = rutHelpers.rutFormat(target.value) || '';
  }

  @HostListener('input', ['$event.target'])
  onChange(target: HTMLInputElement) {
    this.rutChange.emit(rutHelpers.rutClean(target.value));
  }
}
