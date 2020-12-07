import {Directive, EventEmitter, Output} from '@angular/core';
import * as rutHelpers from 'rut-helpers';

@Directive({
  selector: '[formatRut]',
  host: {
    '(blur)': 'onBlur($event)',
    '(focus)': 'onFocus($event)',
    '(input)': 'onChange($event)',
  },
})
export class RutDirective {
  @Output() public rutChange: EventEmitter<any>;

  constructor() {
    this.rutChange = new EventEmitter();
  }

  public onFocus(ev: Event) {
    const htmlInputElement: HTMLInputElement = ev.target as HTMLInputElement;
    htmlInputElement.value = rutHelpers.rutClean(htmlInputElement.value);
  }

  public onBlur(ev: Event) {
    const htmlInputElement: HTMLInputElement = ev.target as HTMLInputElement;
    htmlInputElement.value = rutHelpers.rutFormat(htmlInputElement.value) || '';
  }

  public onChange(ev: Event) {
    const htmlInputElement: HTMLInputElement = ev.target as HTMLInputElement;
    this.rutChange.emit(rutHelpers.rutClean(htmlInputElement.value));
  }
}
