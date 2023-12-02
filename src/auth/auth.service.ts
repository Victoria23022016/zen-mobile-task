import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  auth$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  addToLocalStorage(formData: Params) {
    if (this.checkFormValues(formData)) {
      formData['login'] = 'true';
      formData['role'] = this.makeUserRole();
      window.localStorage[formData['email']] = JSON.stringify(formData);
      console.log(window.localStorage);
      this.auth$.next(true);
    } else {
      this.auth$.next(false);
    }
  }

  checkFormValues(formData: Params): boolean {
    if (formData['password'].length === 1) {
      return false;
    }
    return true;
  }

  checkAuth(): boolean {
    return this.auth$.getValue() ? true : false;
  }

  makeUserRole(): string {
    const roles = ['user1', 'user2', 'user3', 'user4', 'user5'];
    return roles[Math.round(Math.random() * (roles.length - 1))];
  }
}
