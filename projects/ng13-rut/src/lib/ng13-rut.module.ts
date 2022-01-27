import { NgModule } from '@angular/core';
import { RutValueAccessor } from './rut-value-accessor';
import { RutDirective } from './rut.directive';
import { RutPipe } from './rut.pipe';
import { RutValidator } from './rut.validator';

@NgModule({
  declarations: [
    RutPipe,
    RutDirective,
    RutValidator,
    RutValueAccessor
  ],
  providers: [
    RutValidator
  ],
  exports: [
    RutPipe,
    RutDirective,
    RutValidator,
    RutValueAccessor
  ]
})
export class Ng13RutModule { }
