import { AbstractControl } from '@angular/forms';

export class AuthFormValidators {
  static BookedEmailValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (control.value) {
      if (JSON.parse(window.localStorage['users'])[`${control.value}`]) {
        return { bookedEmail: true };
      }
    }
    return null;
  }
}
