import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFormData } from '../auth-form/auth.models';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  validateForm: FormGroup;
  formData: AuthFormData;

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  submitForm(): void {
    this.formData = { ...this.validateForm.value };
    this._authService.logIn(this.formData);
    if (this._authService.checkCurrentUser()) {
      this._router.navigate(['/main/home']);
    }
  }

  logOut(): void {
    this._authService.logOut();
  }
}
