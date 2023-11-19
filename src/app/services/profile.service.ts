import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfileData } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  formData$: Subject<ProfileData> = new Subject();

  sendData(formData: ProfileData): void {
    this.formData$.next(formData);
  }

  updateData(): Subject<ProfileData> {
    return this.formData$;
  }

  checkData(formData: ProfileData): boolean {
    return formData.firstName.length === 1 ? false : true;
  }
}
