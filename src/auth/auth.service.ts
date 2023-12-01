import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  auth$: Subject<boolean> = new Subject();

  addToLocalStorage(formData: Params) {
    if (this.checkFormValues(formData)) {
      formData['login'] = 'true';
      formData['role'] = 'user'; //сделать рандомайзер
      window.localStorage[formData['email']] = JSON.stringify(formData);
      console.log(window.localStorage);
      this.auth$.next(true);
      console.log('true');
    } else {
      this.auth$.next(false);
      console.log('false');
    }
  }

  checkFormValues(formData: Params): boolean {
    if (formData['password'].length === 1) {
      return false;
    }
    return true;
  }

  checkAuth(): boolean {
    let auth;
    this.auth$.subscribe((ans) => {
      auth = ans;
    });
    return true;
    //console.log('auth:', auth);
    //return auth ? true : false; //работает позже подписки
  }

  // login(formData: Params): void {}

  // logout(): void {}
}
