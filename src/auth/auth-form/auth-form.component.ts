import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthFormValidators } from './auth-form.validators';
import { AuthFormData } from './auth.models';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  form: FormGroup;
  formData: AuthFormData;

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    console.log(window.localStorage);
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        AuthFormValidators.BookedEmailValidator,
      ]),
      password: new FormControl('', Validators.required),
    });
    if (this._authService.checkCurrentUser()) {
      this._router.navigate(['/main/home']);
    }
  }

  submit(): void {
    this.formData = { ...this.form.value };
    this._authService.addToLocalStorage(this.formData);
    if (this._authService.checkCurrentUser()) {
      this._router.navigate(['/main/home']);
    } else {
      this._notification.create('warning', '', 'Регистрация не прошла!');
    }
    this.form.reset();
  }
}
