import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ProfileData } from 'src/app/models/models';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, OnDestroy {
  profileData: ProfileData;
  profileDataUpdate: boolean;

  constructor(private readonly _profileService: ProfileService) {}

  ngOnInit(): void {
    this._profileService.formData$.subscribe(
      (profileData) => (this.profileData = profileData)
    );
  }

  ngOnDestroy(): void {
    this._profileService.formData$.unsubscribe();
  }
}
