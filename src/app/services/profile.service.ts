import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProfileData } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  formData$: Subject<ProfileData> = new Subject();

  sendData(formData: ProfileData): boolean {
    this.formData$.next(formData);

    if (formData.firstName.length === 1) {
      return true; //прописать добавление текста в сообщение
    } else {
      return false;
    }
  }
}
