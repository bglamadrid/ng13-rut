import { Directive, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { rutFormat } from 'rut-helpers';

import { ElementRef, Renderer2 } from '@angular/core';

/* tslint:disable:directive-selector directive-class-suffix */

const RUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RutValueAccessor),
  multi: true,
};

@Directive({
  selector: 'input[formatRut]',
  providers: [RUT_VALUE_ACCESSOR],
})
export class RutValueAccessor
  implements ControlValueAccessor {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) { }

  @HostListener('rutChange', ['$event'])
  onChange: any = (v: any) => { /*Empty*/ }

  @HostListener('blur', ['$event'])
  onTouched: any = () => { /*Empty*/ }

  writeValue(value: any): void {
    const normalizedValue: string = rutFormat(value) || '';
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
