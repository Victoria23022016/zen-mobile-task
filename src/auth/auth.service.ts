import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthFormData } from './auth-form/auth.models';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class AuthService {
  auth$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private readonly _notification: NzNotificationService) {}

  addToLocalStorage(formData: AuthFormData): void {
    if (this.checkFormValues(formData)) {
      formData.role = this.makeUserRole();
      if (window.localStorage['users']) {
        let parcedUsers = JSON.parse(window.localStorage['users']);
        parcedUsers[`${formData.email}`] = formData;
        window.localStorage['users'] = JSON.stringify(parcedUsers);
      } else {
        window.localStorage['users'] = JSON.stringify({
          [`${formData.email}`]: formData,
        });
      }
      window.localStorage['currentUser'] = JSON.stringify(formData);
      this.auth$.next(true);
    }
  }

  checkAuth(): boolean {
    return this.auth$.getValue() ? true : false;
  }

  logIn(formData: AuthFormData): void {
    if (this.checkUser(formData)) {
      if (this.checkPassword(formData)) {
        window.localStorage['currentUser'] = JSON.stringify(formData);
        this.auth$.next(true);
        this._notification.info('', 'You logged in!');
      }
    }
  }

  logOut(): void {
    window.localStorage['currentUser'] = JSON.stringify(null);
    this.auth$.next(false);
    this._notification.info('', 'You logged out!');
  }

  checkCurrentUser(): boolean {
    return JSON.parse(window.localStorage['currentUser']) ? true : false;
  }

  private checkFormValues(formData: AuthFormData): boolean {
    return formData.password.length === 1 ? false : true;
  }

  private makeUserRole(): string {
    const roles = ['user1', 'user2', 'user3', 'user4', 'user5'];
    return roles[Math.round(Math.random() * (roles.length - 1))];
  }

  private checkUser(formData: AuthFormData): boolean {
    if (JSON.parse(window.localStorage['users'])[`${formData.email}`]) {
      return true;
    } else {
      this._notification.create('warning', '', 'This email is not registered!');
      return false;
    }
  }

  private checkPassword(formData: AuthFormData): boolean {
    const user = JSON.parse(window.localStorage['users'])[`${formData.email}`];
    if (user.password === formData.password) {
      return true;
    } else {
      this._notification.create('warning', '', 'Password is wrong!');
      return false;
    }
  }
}
