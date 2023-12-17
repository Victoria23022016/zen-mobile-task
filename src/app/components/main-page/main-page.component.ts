import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { ProfileData } from 'src/app/models/models';
import { ProfileService } from 'src/app/services/profile.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  profileData: ProfileData;
  profileDataUpdate: boolean;

  constructor(
    private readonly _profileService: ProfileService,
    private readonly _destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this._profileService.formData$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((profileData) => (this.profileData = profileData));
  }
}
