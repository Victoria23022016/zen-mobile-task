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
  profileDataUpdate: boolean;

  constructor(private readonly _profileService: ProfileService) {}

  ngOnInit(): void {
    this._profileService.formData$.subscribe(
      (profileData) => (this.profileData = profileData)
    );
  }
}
