import {Directive, EventEmitter, Output, HostListener} from '@angular/core';
import * as rutHelpers from 'rut-helpers';

/* tslint:disable:directive-selector */

@Directive({
  selector: '[formatRut]'
})
export class RutDirective {
  @Output() public rutChange: EventEmitter<any>;

  constructor() {
    this.rutChange = new EventEmitter();
  }

  @HostListener('focus', ['$event.target'])
  public onFocus(target: HTMLInputElement) {
    target.value = rutHelpers.rutClean(target.value);
  }

  @HostListener('blur', ['$event.target'])
  public onBlur(target: HTMLInputElement) {
    target.value = rutHelpers.rutFormat(target.value) || '';
  }

  @HostListener('input', ['$event.target'])
  public onChange(target: HTMLInputElement) {
    this.rutChange.emit(rutHelpers.rutClean(target.value));
  }
}
