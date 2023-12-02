import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProfileData } from 'src/app/models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input()
  set profileData(profileData: ProfileData | undefined) {
    if (profileData) {
      this.firstName = profileData.firstName;
      this.lastName = profileData.lastName;
      this.webSite = profileData.url;
    }
  }

  firstName: string = '-';
  lastName: string = '-';
  webSite: string = '-';
  profileDataError: boolean = false;
}
