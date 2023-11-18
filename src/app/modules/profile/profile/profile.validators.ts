import { AbstractControl, FormControl } from '@angular/forms';

export class ProfileValidators {
  static urlValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (!control.value.slice(0, 9).includes('https://')) {
      return { url: true };
    }
    return null;
  }
}
