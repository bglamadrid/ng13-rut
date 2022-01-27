Angular 13 RUT
=============

[![npm](https://www.npmjs.com/package/ng13-rut)](https://img.shields.io/npm/v/ng13-rut) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/bglamadrid/ng13-rut/blob/master/LICENSE)


Forked from https://github.com/HeyPay/ng10-rut to work with Angular 13.

Angular 13 library with several components to handle [Chilean RUT](https://en.wikipedia.org/wiki/National_identification_number#Chile) validation, cleaning and formatting.

## Installation

```bash
yarn add ng13-rut
# or
npm install ng13-rut --save
```

## Usage

### Set-up:

The easiest way to use this library is to import Ng13Rut in your app's main module.

```typescript
import { NgModule } from '@angular/core';
import { Ng13RutModule } from 'ng13-rut';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  ...
  imports: [
    BrowserModule,
    Ng13RutModule
  ],
})
class DemoAppModule { }
```

### Using it:

ng13-rut exposes multiple features that can be used to perform input validation and formatting. Probably you want to use one of the following:

- `RutValidator`: Exposes the `validateRut` directive (to attach to models or inputs) and the RutValidator class to be used as `Validator` on reactive forms.
- `RutPipe`: Exposes the `RutPipe` pipe to format rut numbers on templates
- `RutDirective`: Exposes the `formatRut` directive to format RUT inputs.

#### RutValidator

##### Reactive forms

```typescript
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RutValidator } from 'ng13-rut';
export class DemoAppComponent {
  constructor (fb: FormBuilder, rutValidator: RutValidator) {
    this.reactiveForm = fb.group({
      rut: ['30972198', [Validators.required, rutValidator]]
    });
  }
}

```

##### Template Form
```html
<input [(ngModel)]="user.rut" name="rut" validateRut required>
```

#### RutPipe

```html
{{ user.rut }}
<!-- 30972198 -->
{{ user.rut | rut }}
<!-- 3.097.219-8 -->
```

#### formatRut (Directive)
```html
<input [(ngModel)]="user.rut" name="rut" formatRut required>
<!--
(on blur)
3.097.219-8

(on focus)
30972198
-->
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Credits

The original lib was created based on Platanus lib:
https://github.com/platanus/ng2-rut

## License

Based on Angular 2 RUT by Platanus. Angular 2 RUT is © 2017 Platanus, spa. It is free software and may be redistributed under the terms specified in the LICENSE file.
