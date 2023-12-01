import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  form: FormGroup;
  formData: Params;
  auth: boolean;

  constructor(
    public _authService: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  submit(): void {
    this.formData = { ...this.form.value };
    this._authService.addToLocalStorage(this.formData);
    if (this._authService.checkAuth()) {
      this._router.navigate(['/main']); //попробовать сделать без подписки? метод с проверкой, тот же что и у гарда!!
    }
    this.form.reset();
  }
}
