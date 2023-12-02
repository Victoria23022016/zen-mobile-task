import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfileData } from '../models/models';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  formData$: Subject<ProfileData> = new Subject();

  constructor(private readonly _notification: NzNotificationService) {}

  sendData(formData: ProfileData): void {
    if (formData.firstName.length === 1) {
      this._notification.create(
        'warning',
        '',
        'Данные профиля не были обновлены!'
      );
    } else {
      this.formData$.next(formData);
      this._notification.create('success', '', 'Профиль успешно обновлен!', {
        nzDuration: 30000,
      });
    }
  }
}
