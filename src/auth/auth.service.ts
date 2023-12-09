import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthFormData } from './auth-form/auth.models';

@Injectable()
export class AuthService {
  auth$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  addToLocalStorage(formData: AuthFormData): void {
    if (this.checkFormValues(formData)) {
      formData.login = true;
      formData.role = this.makeUserRole();
      window.localStorage[formData.email] = JSON.stringify(formData);
      this.auth$.next(true);
    } else {
      this.auth$.next(false);
    }
  }

  checkFormValues(formData: AuthFormData): boolean {
    return formData.password.length === 1 ? false : true;
  }

  checkAuth(): boolean {
    return this.auth$.getValue() ? true : false;
  }

  makeUserRole(): string {
    const roles = ['user1', 'user2', 'user3', 'user4', 'user5'];
    return roles[Math.round(Math.random() * (roles.length - 1))];
  }
}
