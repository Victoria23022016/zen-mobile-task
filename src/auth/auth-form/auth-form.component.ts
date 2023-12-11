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
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        AuthFormValidators.BookedEmailValidator,
      ]),
      password: new FormControl('', Validators.required),
    });
  }

  submit(): void {
    this.formData = { ...this.form.value };
    this._authService.addToLocalStorage(this.formData);
    if (this._authService.checkAuth()) {
      this._router.navigate(['/main']);
    } else {
      this._notification.create('warning', '', 'Регистрация не прошла!');
    }
    this.form.reset();
    console.log(window.localStorage);
  }
}
