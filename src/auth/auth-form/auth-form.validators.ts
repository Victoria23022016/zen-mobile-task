import { AbstractControl } from '@angular/forms';

export class AuthFormValidators {
  static BookedEmailValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (control.value) {
      if (window.localStorage.getItem(`${control.value}`)) {
        return { bookedEmail: true };
      }
    }
    return null;
  }
}
