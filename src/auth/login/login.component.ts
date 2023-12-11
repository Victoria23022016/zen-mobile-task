import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  //NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { AuthFormData } from '../auth-form/auth.models';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  validateForm: FormGroup;
  formData: AuthFormData;

  constructor(private readonly _authService: AuthService) {}

  // constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.validateForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.formData = { ...this.validateForm.value };
    this._authService.logIn(this.formData);
  }
}
