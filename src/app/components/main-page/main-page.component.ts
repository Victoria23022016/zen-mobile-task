import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileData } from 'src/app/models/models';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  profileData: ProfileData;
  profileDataState: boolean;

  constructor(private readonly _profileService: ProfileService) {}

  ngDoCheck(): void {
    if (this._profileService.updateData !== undefined) {
      this._profileService.updateData().subscribe((resp) => {
        this.profileData = resp;
        this.profileDataState = this._profileService.checkData(
          this.profileData
        );
      });
    }
  }
}
